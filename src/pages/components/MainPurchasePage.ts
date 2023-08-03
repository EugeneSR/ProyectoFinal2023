import { BasePage } from "../base.page";
import { ElementActions } from "../../core/element-actions";

class MainPurchasePage extends BasePage {

    // Locators    
    private successMessage: string = "//p[text()='Congratulations! Your order has been confirmed!']";
    private errorMessage: string = "//h2[text()='Payment']";

    constructor() {
        super();
    }

    async showMessageSuccess() {

        return await this.driver.Page.textContent(this.successMessage);
    }
    async showErrorMessage() {

        return await this.driver.Page.textContent(this.errorMessage);
    }
 

}

export const mainPurchase = new MainPurchasePage();