import { mainHeader } from "../src/pages/components/MainHeaderPage";
import { driverInstance, Driver } from '../src/core/driver';
import { LoginPage } from '../src/pages/login.page';

import dotenv from 'dotenv';


dotenv.config({ path: `.env.test`, override: true });

declare const reporter:any;

describe('Feature My Store: User logged in', () => {

    let loginPage: LoginPage;

    beforeAll(async () => {
        await driverInstance.startDriver();
        loginPage = new LoginPage();

    },30000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        const url = String(process.env.URL);
        await loginPage.navigateTo(url);
    });

    it('Login: the user is successfully logged in', async () => {
        reporter
        .description("Login into https://automationexercise.com/ ")  
        .story("BOND-101");

     
        await loginPage.clicLink();  //Select icon Login
        const email = String(process.env.EMAIL); //Parse of variables
        await loginPage.setEmail(email);
        const password = String(process.env.PASS); //Parse of variables
        await loginPage.setPassword(password);
        await loginPage.clicLogin();
      

        //**********************EXPECT*************************************/
        const value = await mainHeader.getElementText();//get the logged in username
        expect(value).toEqual("Maxx"); // Logged in user name: Maxx
     
        //**********************END *************************************/
        await loginPage.clicLogout();

         const screenshotBuffer = await driverInstance.Page.screenshot();
         reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");

    });


    it('Login: the user with incorrect email and password', async () => {
        reporter
        .description("Login into https://automationexercise.com/ ")  
        .story("BOND-101");

     
        await loginPage.clicLink();  //Select icon Login
        const emailIncorrect= String(process.env.EMAILINCORRECT);
        await loginPage.setEmail(emailIncorrect);
        const passwordIncorrect= String(process.env.PASSWDINCORRECT);
        await loginPage.setPassword(passwordIncorrect);
        await loginPage.clicLogin();


        await loginPage.clicLink();  //Select icon Login
        const email = String(process.env.EMAIL); //Parse of variables
        await loginPage.setEmail(email);
        const password = String(process.env.PASS); //Parse of variables
        await loginPage.setPassword(password);
        await loginPage.clicLogin();
      

        //**********************EXPECT*************************************/
        const value = await mainHeader.getElementText();//get the logged in username
        expect(value).toEqual("Maxx"); // Logged in user name: Maxx
     
        //**********************END *************************************/

         const screenshotBuffer = await driverInstance.Page.screenshot();
         reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");

    });

});