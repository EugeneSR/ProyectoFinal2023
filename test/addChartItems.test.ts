import { mainAddChartPage } from "../src/pages/components/MainAddChartPage";
import { driverInstance } from "../src/core/driver";
import {AddChartItemsPage } from "../src/pages/addChartItems.page";
import { LoginPage } from "../src/pages/login.page";
import dotenv from 'dotenv';

import { TESTDATA } from '../data.app';
import { mainPurchase } from "../src/pages/components/MainPurchasePage";
dotenv.config({ path: `.env.test`, override: true });
declare const reporter:any;

describe('Feature My Store: Shopping Cart', () => {

    let addChartItemsPage: AddChartItemsPage;
    let loginPage: LoginPage;

    beforeAll(async () => {
        await driverInstance.startDriver();
        loginPage = new LoginPage();
        const url = String(process.env.URL);
        await loginPage.navigateTo(url);
        addChartItemsPage = new AddChartItemsPage();
        

    }, 100000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Shopping Cart: add clothing items to shopping cart', async () => {
        reporter
        .description("Login into https://automationexercise.com/ ")  
        .story("BOND-104");

        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct1();
        await addChartItemsPage.setQuantity("4"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart
      
        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product
    
        await addChartItemsPage.buttonViewProduct2();
        await addChartItemsPage.setQuantity("2"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart
       
        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product
      

        await addChartItemsPage.buttonViewProduct3();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct4();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct5();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct6();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct7();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct8();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct9();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct10();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct11();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct12();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct13();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct14();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product


        await addChartItemsPage.buttonViewProduct15();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct16();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product
        
        await addChartItemsPage.buttonViewProduct17();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct18();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct19();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct20();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct21();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct22();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct23();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct24();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct25();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct26();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct27();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct28();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct29();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct30();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct31();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct32();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct33();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonContinueAddShopping();
        await addChartItemsPage.linkProducts(); //Link to product

        await addChartItemsPage.buttonViewProduct34();
        await addChartItemsPage.setQuantity("3"); //Click--> quantity:enter only whole numbers
        await addChartItemsPage.buttonAddToCart();  //Add to cart

        await addChartItemsPage.buttonViewCartShop();

        await addChartItemsPage.buttonViewCheckout();

        await addChartItemsPage.buttonViewContinueCart();

        const messages = await mainAddChartPage.existItem();//get message  success

        
        
      
        //**********************EXPECT*************************************/
       
       expect(messages).toEqual("Item"); // Exist Item
     
        //**********************END *************************************/


        const screenshotBuffer = await driverInstance.Page.screenshot();
        reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");
 

    });

    it('Shopping Cart: remove clothing items from shopping cart', async () => {
        reporter
        .description("Login into https://automationexercise.com/ ")  
        .story("BOND-105");

        await addChartItemsPage.buttonDeleteItems();

        const message = await mainAddChartPage.showMessageSuccessEmpty();//get message  success
        
      
        //**********************EXPECT*************************************/
       
       expect(message).toEqual("Cart is empty!"); // It's empty
     
        //**********************END *************************************/


        const screenshotBuffer = await driverInstance.Page.screenshot();
        reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");
 
    });

});