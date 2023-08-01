import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {

    /************Locators***************************/

    private linkLogin: string = "//a[contains(.,'Signup / Login')]";
    private email: string = "(//input[@name='email'])[1]";
    private password: string = "//input[@type='password']";
    private loginButton: string = "(//button[@class='btn btn-default'])[1]";
    private logoutButton:string="//a[contains(text(),'Logout')]";

    constructor() {
        super();
    }

    async clicLink() {
        await ElementActions.click(this.linkLogin);
    }

   async setEmail(text: string) {
        await ElementActions.setText(this.email, text);
    }
    async setPassword(text: string) {
        await ElementActions.setText(this.password, text);
    }
    async clicLogin() {
        await ElementActions.click(this.loginButton);
    }
    async clicLogout() {
        await ElementActions.click(this.logoutButton);
    }

}
