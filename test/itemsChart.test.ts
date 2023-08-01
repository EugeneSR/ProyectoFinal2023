import { mainAddChartPage } from '../src/pages/components/MainAddChartPage';
import { driverInstance } from "../src/core/driver";
import{ItemsPage}from "../src/pages/items.page";
import { LoginPage } from "../src/pages/login.page";
import dotenv from 'dotenv';

import { TESTDATA } from '../data.app';
import { mainPurchase } from "../src/pages/components/MainPurchasePage";
import { AddChartShopPage } from '../src/pages/addChartShop.page';
import { mainHeader } from '../src/pages/components/MainHeaderPage';
dotenv.config({ path: `.env.test`, override: true });
declare const reporter:any;

describe('Feature My Store: Shopping Cart', () => {

    let itemsPage: ItemsPage;
    let loginPage: LoginPage;

    beforeAll(async () => {
        await driverInstance.startDriver();
        loginPage = new LoginPage();
        const url = String(process.env.URL);
        await loginPage.navigateTo(url);
        itemsPage = new ItemsPage();
        

    }, 300000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Shopping Cart: Verify empty shopping cart display', async () => {
        reporter
        .description("Login into https://automationexercise.com/ ")  
        .story("BOND-104");

        await itemsPage.linkCarrito(); //link carrito

        const message = await mainAddChartPage.showMessageSuccessEmpty();//get message  success
      
        //**********************EXPECT*************************************/
       
        expect(message).toEqual("Cart is empty!"); // It's empty
     
        //**********************END *************************************/

        await itemsPage.linkProducts(); //link carrito
        const screenshotBuffer = await driverInstance.Page.screenshot();
        reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");
 

    });

    it('Shopping Cart: Verify the display of items within the category: WOMEN, MEN, KIDS', async () => {
        reporter
        .description("Login into https://automationexercise.com/ ")  
        .story("BOND-105");

         await itemsPage.linkProducts(); //link carrito

         await itemsPage.opcionWomen();
         await itemsPage.opcionDresses();

         const dresses = await  mainAddChartPage.getItemDresses();//get 
        
   //**********************EXPECT*************************************/
   expect(dresses).toEqual("WOMEN - DRESS PRODUCTS"); // 
      
 //**********************END *************************************/

         await itemsPage.opcionWomen();
         await itemsPage.opcionTops();

         const tops = await  mainAddChartPage.getItemTops();//get 
        
            //**********************EXPECT*************************************/
       
            expect(tops).toEqual("WOMEN - TOPS PRODUCTS"); // 
        //**********************END *************************************/

         await itemsPage.opcionWomen();
         await itemsPage.opcionSaree();

         const saree = await mainAddChartPage.getItemSare();//get 
        
   //**********************EXPECT*************************************/
       
   expect(saree).toEqual("WOMEN - SAREE PRODUCTS"); // 
        //**********************END *************************************/
      
         await itemsPage.opcionMen();
         await itemsPage.opcionTshirts();
         const tshirts = await mainAddChartPage.getItemTshirts();//get 
        
//**********************EXPECT*************************************/
       
expect(tshirts).toEqual("MEN - TSHIRTS PRODUCTS"); // 
//**********************END *************************************/

         await itemsPage.opcionMen();
         await itemsPage.opcionJeans();

         const jeans = await mainAddChartPage.getItemJeans();//get 
       
          //**********************EXPECT*************************************/
       
          expect(jeans).toEqual("MEN - JEANS PRODUCTS"); // 
        //**********************END *************************************/

         await itemsPage.opcionKids();
         await itemsPage.opcionDress();

         const dressk = await mainAddChartPage.getItemDress();//get 
        
          //**********************EXPECT*************************************/
       
          expect(dressk).toEqual("KIDS - DRESS PRODUCTS"); // 
        //**********************END *************************************/
         await itemsPage.opcionKids();
         await itemsPage.opcionTopsAndShirts();

         const topsShirts = await mainAddChartPage.getItemTopsShirts();//get 
        
        //**********************EXPECT*************************************/
        expect(topsShirts).toEqual("KIDS - TOPS & SHIRTS PRODUCTS"); // 
      
        //**********************END *************************************/

        const screenshotBuffer = await driverInstance.Page.screenshot();
        reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");
 
    });

    it('Shopping Cart: Verify the display of items within the category: BRANDS', async () => {
        reporter
        .description("Login into https://automationexercise.com/ ")  
        .story("BOND-107");

         await itemsPage.linkProducts(); //link products

         await itemsPage.opcionPolo();
         const polo= await mainAddChartPage.getBrandPolo();
      
 //**********************EXPECT*************************************/
 expect(polo).toEqual("BRAND - POLO PRODUCTS"); // 
      
 //**********************END *************************************/

         await itemsPage.opcionHYM();
         const hym= await mainAddChartPage.getBrandHYM();
        

 //**********************EXPECT*************************************/
 expect(hym).toEqual("BRAND - H&M PRODUCTS"); // 
      
 //**********************END *************************************/

         await itemsPage.opcionMadame();

         const madame= await mainAddChartPage.getBrandMadame();
       
 //**********************EXPECT*************************************/
 expect(madame).toEqual("BRAND - MADAME PRODUCTS"); // 
      
 //**********************END *************************************/

         await itemsPage.opcionMastHarbours();
         const harbour= await mainAddChartPage.getBrandMastHarbour();
        
 //**********************EXPECT*************************************/
 expect(harbour).toEqual("BRAND - MAST & HARBOUR PRODUCTS"); // sss
      
 //**********************END *************************************/
         await itemsPage.opcionBabyHuges();
         const babyHug= await mainAddChartPage.getBrandBabyHug();
       
 //**********************EXPECT*************************************/
 expect(babyHug).toEqual("BRAND - BABYHUG PRODUCTS"); // 
      
 //**********************END *************************************/
         await itemsPage.opcionAllensSolly();
         const allen= await mainAddChartPage.getBrandAllen();
       
 //**********************EXPECT*************************************/
 expect(allen).toEqual("BRAND - ALLEN SOLLY JUNIOR PRODUCTS"); // 
      
 //**********************END *************************************/
         await itemsPage.opcionKookieKids();
         const kokie= await mainAddChartPage.getBrandKookie();
        
 //**********************EXPECT*************************************/
 expect(kokie).toEqual("BRAND - KOOKIE KIDS PRODUCTS"); // 
      
 //**********************END *************************************/
         await itemsPage.opcionBiba();
         const biba= await mainAddChartPage.getBrandBiba();
      
//**********************EXPECT*************************************/
 expect(biba).toEqual("BRAND - BIBA PRODUCTS"); // 
      
 //**********************END *************************************/

 const screenshotBuffer = await driverInstance.Page.screenshot();
 reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");


});

it('Shopping Cart: Verify the clothing items search option ', async () => {
    reporter
    .description("Login into https://automationexercise.com/ ")  
    .story("BOND-109");

     await itemsPage.linkProducts(); //link products

     await itemsPage.setBusquedaItems("jeans");
     await itemsPage.buttonSearchItems();
     await itemsPage.setBusquedaItems("tops");
     await itemsPage.buttonSearchItems();
     await itemsPage.setBusquedaItems("dress");
     await itemsPage.buttonSearchItems();
     await itemsPage.setBusquedaItems("saree");
     await itemsPage.buttonSearchItems();
     await itemsPage.setBusquedaItems("tshirts");
     await itemsPage.buttonSearchItems();
     await itemsPage.setBusquedaItems("shirts");
     await itemsPage.buttonSearchItems();

     const bannerBusqueda= await mainAddChartPage.getBannerBusqueda();
     console.log("banner: ",bannerBusqueda);
  
//**********************EXPECT*************************************/
expect(bannerBusqueda).toEqual("Searched Products"); // 
  
//**********************END *************************************/

const screenshotBuffer = await driverInstance.Page.screenshot();
reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");


});

});