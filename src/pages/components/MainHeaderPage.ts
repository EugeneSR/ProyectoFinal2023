
import { BasePage } from "../base.page";

class MainHeaderPage extends BasePage {

    // Locators    
    private successMessage: string = "//p[text()='Congratulations! Your new account has been successfully created!']";
    private UserLogued="b";

    private messageDeleted: string = "//b[text()='Account Deleted!']";
    private messageInvalidPassword: string = "//p[text()='Your email or password is incorrect!']";



    constructor() {
        super();
    }

    async getElementText() {
        return await this.driver.Page.textContent(this.UserLogued)

    }
    async getMessageDeleted() {
        return await this.driver.Page.textContent(this.messageDeleted)

    }
    async showMessageSuccess() {
        return await this.driver.Page.textContent(this.successMessage);

    }

    async showMessageInvalidPassword() {
        return await this.driver.Page.textContent(this.messageInvalidPassword);
    }
}

export const mainHeader = new MainHeaderPage();

