import { driverInstance } from "../src/core/driver";
import { RegisterPage } from "../src/pages/register.page";
import { TESTDATA } from "../data.app";
import dotenv from 'dotenv';
import { mainHeader } from "../src/pages/components/MainHeaderPage";
dotenv.config({ path: `.env.test`, override: true });

declare const reporter:any;

describe('Usuario: Cliente', () => {

    let registerPage: RegisterPage;

    beforeAll(async () => {
        await driverInstance.startDriver();
        registerPage = new RegisterPage();

    }, 50000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        const url = String(process.env.URL);
        await registerPage.navigateTo(url);
    });

    it('Registrar nueva cuenta de usuario ', async () => {

        reporter
        .description("Login into https://automationexercise.com/")  
        .story("BOND-101");

        await registerPage.clicLink();  //Select icon Login, but option register

        await registerPage.registerUserName(TESTDATA.userName);
        await registerPage.registerEmail(TESTDATA.email);
        
        await registerPage.clicButtonRegisterAccount(); //

        await registerPage.createInformationAccount(TESTDATA.gender,TESTDATA.password,
        TESTDATA.day, TESTDATA.month, TESTDATA.year, TESTDATA.firstNames,TESTDATA.lastNames,
        TESTDATA.company, TESTDATA.address1, TESTDATA.address2, TESTDATA.state, TESTDATA.city, TESTDATA.zipCode,TESTDATA.movilNumber);
        
        await registerPage.selectCountry(TESTDATA.country);

        await registerPage.clicCreateAccountButton();
        
        const message = await mainHeader.showMessageSuccess();//get message  success



         //**********************EXPECT*************************************/
        
         expect(message).toEqual("Congratulations! Your new account has been successfully created!"); // cuenta de usuario creada
      
         //**********************END *************************************/

        await registerPage.clicButtonContinue();
        await registerPage.clicButtonDelete();
        const messageDelete = await mainHeader.getMessageDeleted();//get message  success
       
           //**********************EXPECT*************************************/
        
        expect(messageDelete).toEqual("Account Deleted!"); // cuenta eliminada
      
           //**********************END *************************************/

       await registerPage.clicButtonContinue();
       

        const screenshotBuffer = await driverInstance.Page.screenshot();
        reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");

    });

    it('Iniciar sesion con correo electronico y contraseña invalidos' , async () => {
        reporter
        .description("Login into https://automationexercise.com/ ")  
        .story("BOND-102");

     
        await registerPage.loginIcon();  //Select icon Login
        const emailIncorrect= String(process.env.EMAILINCORRECT);
        await registerPage.setEmail(emailIncorrect);
        const passwordValido= String(process.env.PASS);
        await registerPage.setPassword(passwordValido);
        await registerPage.clicLogin();

        const emailValido= String(process.env.EMAIL);
        await registerPage.setEmail(emailValido);
        const passwordInvalido= String(process.env.PASSWDINCORRECT);
        await registerPage.setPassword(passwordInvalido);
        await registerPage.clicLogin();

        const invalidPass= await mainHeader.showMessageInvalidPassword();
      
  //**********************EXPECT*************************************/
        
  expect(invalidPass).toEqual("Your email or password is incorrect!"); //invalido pasword
      
  //**********************END *************************************/

         const screenshotBuffer = await driverInstance.Page.screenshot();
         reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");

    });

    it('Iniciar sesion con email y password correctos ', async () => {
        reporter
        .description("Login into https://automationexercise.com/ ")  
        .story("BOND-103");

      
        await registerPage.loginIcon();  //Select icon Login
        const email = String(process.env.EMAIL); //Parse of variables
        await registerPage.setEmail(email);
        const password = String(process.env.PASS); //Parse of variables
        await registerPage.setPassword(password);
        await registerPage.clicLogin();
      

        //**********************EXPECT*************************************/
        const value = await mainHeader.getElementText();//get the logged in username
        expect(value).toEqual("ArielMont12"); // Logged in user name: Ariel
     
        //**********************END *************************************/
     

         const screenshotBuffer = await driverInstance.Page.screenshot();
         reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");

    });


});