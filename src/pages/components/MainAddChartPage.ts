import { BasePage } from "../base.page";
import { ElementActions } from "../../core/element-actions";

class MainAddChartPage extends BasePage {

    // Locators    
   
    private messageEmpty: string ="//b[text()='Cart is empty!']";
    private item:string="//td[text()='Item']";

    private bannerDresses:string="//h2[text()='Women - Dress Products']";
    private bannerTops:string="//h2[text()='Women - Tops Products']";
    private bannerSaree:string=" //h2[text()='Women - Saree Products']";

    private bannerTshirts:string=" //h2[text()='Men - Tshirts Products']";
    private bannerJeans:string=" //h2[text()='Men - Jeans Products']";

    private bannerDress:string=" //h2[text()='Kids - Dress Products']";
    private bannerTopsShirts:string=" //h2[text()='Kids - Tops & Shirts Products']";
//---------BANNER BRANDS

    private bannerPolo:string="//h2[text()='Brand - Polo Products']";
    private bannerHym:string="//h2[text()='Brand - H&M Products']";
    private bannerMadame:string="//h2[text()='Brand - Madame Products']";

    private bannerMastHarbour:string="//h2[text()='Brand - Mast & Harbour Products']";
    private bannerBabyHug:string="//h2[text()='Brand - Babyhug Products']";

    private bannerAllenSolly:string="//h2[text()='Brand - Allen Solly Junior Products']";

    private bannerKookieKids:string="//h2[text()='Brand - Kookie Kids Products']";
    private bannerBiba:string="//h2[text()='Brand - Biba Products']";

    private bannerSearcher:string="//h2[text()='Searched Products']";
    


    constructor() {
        super();
    }

    async showMessageSuccessEmpty() {
        return await this.driver.Page.innerText(this.messageEmpty);
    }

    async existItem() {
        return await this.driver.Page.innerText(this.item);
    }

    async getItemDresses() {
        return await this.driver.Page.innerText(this.bannerDresses);
    }
    async getItemTops() {
        return await this.driver.Page.innerText(this.bannerTops);
    }

    async getItemSare() {
        return await this.driver.Page.innerText(this.bannerSaree);
    }

    async getItemTshirts() {
        return await this.driver.Page.innerText(this.bannerTshirts);
    }

    async getItemJeans() {
        return await this.driver.Page.innerText(this.bannerJeans);
    }
    async getItemDress() {
        return await this.driver.Page.innerText(this.bannerDress);
    }
    async getItemTopsShirts() {
        return await this.driver.Page.innerText(this.bannerTopsShirts);
    }

    //---------BRANDS-------------

    async getBrandPolo() {
        return await this.driver.Page.innerText(this.bannerPolo);
    }
    async getBrandHYM() {
        return await this.driver.Page.innerText(this.bannerHym);
    }
    async getBrandMadame() {
        return await this.driver.Page.innerText(this.bannerMadame);
    }
    async getBrandMastHarbour() {
        return await this.driver.Page.innerText(this.bannerMastHarbour);
    }
    async getBrandBabyHug() {
        return await this.driver.Page.innerText(this.bannerBabyHug);
    }
    async getBrandAllen() {
        return await this.driver.Page.innerText(this.bannerAllenSolly);
    }
    async getBrandKookie() {
        return await this.driver.Page.innerText(this.bannerKookieKids);
    }
    async getBrandBiba() {
        return await this.driver.Page.innerText(this.bannerBiba);
    }

    async getBannerBusqueda(){
        return await this.driver.Page.textContent(this.bannerSearcher);
    }






 

}

export const mainAddChartPage = new MainAddChartPage();