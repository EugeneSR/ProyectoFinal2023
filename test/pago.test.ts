import { mainAddChartPage } from "../src/pages/components/MainAddChartPage";
import { driverInstance } from "../src/core/driver";
import { AddChartShopPage } from "../src/pages/addChartShop.page";
import dotenv from 'dotenv';

import { TESTDATA } from '../data.app';
import { mainPurchase } from "../src/pages/components/MainPurchasePage";
import { RegisterPage } from "../src/pages/register.page";

dotenv.config({ path: `.env.test`, override: true });
declare const reporter:any;

describe('Pago', () => {

    let addChartShopPage: AddChartShopPage;
    let registerPage: RegisterPage;

    beforeAll(async () => {
        await driverInstance.startDriver();
        registerPage=new RegisterPage();
        addChartShopPage = new AddChartShopPage();
        

    }, 50000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        const url = String(process.env.URL);
        await addChartShopPage.navigateTo(url);
    });

 
    it('Comprar articulos de vestir con una cuenta de usuario ya registrada', async () => {
        reporter
        .description("Login into https://automationexercise.com/ ")  
        .story("BOND-102");

        await addChartShopPage.linkProducts(); //Link to product

        await addChartShopPage.buttonViewProduct1();
        await addChartShopPage.setQuantity("4"); //Click--> quantity:enter only whole numbers
        await addChartShopPage.buttonAddToCart();  //Add to cart
      
        await addChartShopPage.buttonContinueAddShopping();
        await addChartShopPage.linkProducts(); //Link to product
    
        await addChartShopPage.buttonViewProduct2();
        await addChartShopPage.setQuantity("2"); //Click--> quantity:enter only whole numbers
        await addChartShopPage.buttonAddToCart();  //Add to cart
       
        await addChartShopPage.buttonContinueAddShopping();
        await addChartShopPage.linkProducts(); //Link to product
      

        await addChartShopPage.buttonViewProduct3();
        await addChartShopPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartShopPage.buttonAddToCart();  //Add to cart

        await addChartShopPage.buttonViewCartShop();
        await addChartShopPage.buttonViewCheckout();
        await addChartShopPage.buttonViewRegisterLogin();

        /*****Autentificación */
        const email = String(process.env.EMAIL); //Parse of variables
        await registerPage.setEmail(email);
        const password = String(process.env.PASS); //Parse of variables
        await registerPage.setPassword(password);
        await registerPage.clicLogin();
     /*******--------- */
        await addChartShopPage.buttonviewIconCart();
         await addChartShopPage.buttonProceddToCheckout();
         await addChartShopPage.buttonPlaceOrder();

        const nameCard=String(process.env.NAME_CARD);
        await addChartShopPage.setNameCard(nameCard);

        const cardNumber=String(process.env.CARD_NUMBER);
        await addChartShopPage.setCardNumber(cardNumber);

        const cvc=String(process.env.CVC);
        await addChartShopPage.setCVC(cvc);

        const month=String(process.env.MONTH);
        await addChartShopPage.setExpirationMonthCard(month);

        const year=String(process.env.YEAR);
        await addChartShopPage.setExpirationYearCard(year);

        await addChartShopPage.buttonPayConfirmOrder();

        await addChartShopPage.buttonDownloadBill(); // Download bill

        const message = await mainPurchase.showMessageSuccess();//get message  success
    
        //**********************EXPECT*************************************/
       
        expect(message).toEqual("Congratulations! Your order has been confirmed!"); // congratulations your purchase has been processed
     
        //**********************END *************************************/

        
        const screenshotBuffer = await driverInstance.Page.screenshot();
        reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");

        await addChartShopPage.buttonLogout();
 
    });

    
    it('Validar los campos obligatorios para el registro de pago con tarjeta', async () => {
        reporter
        .description("Login into https://automationexercise.com/ ")  
        .story("BOND-102");

        await addChartShopPage.linkProducts(); //Link to product

        await addChartShopPage.buttonViewProduct1();
        await addChartShopPage.setQuantity("4"); //Click--> quantity:enter only whole numbers
        await addChartShopPage.buttonAddToCart();  //Add to cart
      
        await addChartShopPage.buttonContinueAddShopping();
        await addChartShopPage.linkProducts(); //Link to product
    
        await addChartShopPage.buttonViewProduct2();
        await addChartShopPage.setQuantity("2"); //Click--> quantity:enter only whole numbers
        await addChartShopPage.buttonAddToCart();  //Add to cart
       
        await addChartShopPage.buttonContinueAddShopping();
        await addChartShopPage.linkProducts(); //Link to product
      

        await addChartShopPage.buttonViewProduct3();
        await addChartShopPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartShopPage.buttonAddToCart();  //Add to cart

        await addChartShopPage.buttonViewCartShop();
        await addChartShopPage.buttonViewCheckout();
        await addChartShopPage.buttonViewRegisterLogin();

        /*****Autentificación */
        const email = String(process.env.EMAIL); //Parse of variables
        await registerPage.setEmail(email);
        const password = String(process.env.PASS); //Parse of variables
        await registerPage.setPassword(password);
        await registerPage.clicLogin();
        /*******--------- */
        await addChartShopPage.buttonviewIconCart();
        await addChartShopPage.buttonProceddToCheckout();
        await addChartShopPage.buttonPlaceOrder();

        const nameCard=String(process.env.NAME_CARD);
        await addChartShopPage.setNameCard(nameCard);

        const cardNumber=String(process.env.CARD_NUMBER);
        await addChartShopPage.setCardNumber(cardNumber);

        const month=String(process.env.MONTH);
        await addChartShopPage.setExpirationMonthCard(month);

        const year=String(process.env.YEAR);
        await addChartShopPage.setExpirationYearCard(year);

        await addChartShopPage.buttonPayConfirmOrder();

       

        const message = await mainPurchase.showErrorMessage();//get message  success
    
        //**********************EXPECT*************************************/
       
        expect(message).toEqual("Payment"); // sigue en la ventana de inresar datos de la tarjeta
     
        //**********************END *************************************/
        const screenshotBuffer = await driverInstance.Page.screenshot();
        reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");
 
    });

});