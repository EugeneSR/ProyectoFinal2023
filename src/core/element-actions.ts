import { driverInstance } from './driver';

export class ElementActions {

    static async click(locator: string) {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.click(locator);
    }
    static async setText(locator: string, text: string): Promise<void> {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.fill(locator, text);
    }
    static async check(locator: string) {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.locator(locator).check();
    }

    static async selectOption(locator: string, text: string): Promise<void> {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.locator(locator).selectOption({label: text });
    }

    static async selectOptionByValue(locator: string, text: string): Promise<void> {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.locator(locator).selectOption({value: text });
    }



 
}
