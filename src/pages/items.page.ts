import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";


export class ItemsPage extends BasePage {

    /************Locators***************************/

    private linkProduct: string="(//ul[@class='nav navbar-nav']//a)[2]"; 
    private linkCarritoCompras: string="(//i[@class='fa fa-shopping-cart'])[1]";
    private categoryWomen: string="//a[contains(.,'Women')]";
    private categoryMen: string="//a[contains(.,'Men')]";
    private categoryKids: string="(//a[@data-parent='#accordian'])[3]";

    

    private categoryDresses: string="(//div[@class='panel-body']//a)[1]";
    private categoryTops: string="(//div[@class='panel-body']//a)[2]";
    private categorySAREE: string="//a[contains(text(),'Saree')]";

    private categoryTshirts: string="//a[contains(text(),'Tshirts')]";
    private categoryJeans: string="//a[contains(text(),'Jeans')]";

    private categoryDress:string="//div[@id='Kids']/div[1]/ul[1]/li[1]/a[1]";
    private categoryTopsAndShirts:string="//a[contains(text(),'Tops & Shirts')]";

    private polo:string="//a[contains(.,'(6)Polo')]";
    private hym:string="//a[contains(.,'(5)H&M')]";
    private madame:string="//a[contains(.,'(5)Madame')]";
    private mastHarbours:string="//a[contains(.,'(3)Mast & Harbour')]";
    private babyHuges:string="//a[contains(.,'(4)Babyhug')]";
    private allensSolly:string="//a[contains(.,'(3)Allen Solly Junior')]";
    private kookieKids:string="//a[contains(.,'(3)Kookie Kids')]";
    private bibaba:string="//a[contains(.,'(5)Biba')]";


    private barraBusqueda:string="//input[@placeholder='Search Product']";
    private buttonBuscar:string="(//button[contains(@class,'btn btn-default')])[1]";


    constructor() {
        super();
    }
    async linkProducts(){
        await ElementActions.click(this.linkProduct);
    }    

    async linkCarrito(){
        await ElementActions.click(this.linkCarritoCompras);
    }   

    async opcionWomen(){
        await ElementActions.click(this.categoryWomen);
    }  
    
    async opcionMen(){
        await ElementActions.click(this.categoryMen);
    }   

    async opcionKids(){
        await ElementActions.click(this.categoryKids);
    }   

    async opcionDresses(){
        await ElementActions.click(this.categoryDresses);
    }   
    async opcionTops(){
        await ElementActions.click(this.categoryTops);
    }   
    async opcionSaree(){
        await ElementActions.click(this.categorySAREE);
    }   

    async opcionTshirts(){
        await ElementActions.click(this.categoryTshirts);
    }   

    async opcionJeans(){
        await ElementActions.click(this.categoryJeans);
    }   
    async opcionDress(){
        await ElementActions.click(this.categoryDress);
    } 
    
    async opcionTopsAndShirts(){
        await ElementActions.click(this.categoryTopsAndShirts);
    }  
//-------Brands----
    async opcionPolo(){
        await ElementActions.click(this.polo);
    }
    async opcionHYM(){
        await ElementActions.click(this.hym);
    }
    async opcionMadame(){
        await ElementActions.click(this.madame);
    }

    async opcionMastHarbours(){
        await ElementActions.click(this.mastHarbours);
    }
    
    async opcionBabyHuges(){
        await ElementActions.click(this.babyHuges);
    }
    
    async opcionAllensSolly(){
        await ElementActions.click(this.allensSolly);
    }

    async opcionKookieKids(){
        await ElementActions.click(this.kookieKids);
    }
    async opcionBiba(){
        await ElementActions.click(this.bibaba);
    }
    async opcionBusquedaItems(){
        await ElementActions.click(this.barraBusqueda);
    }
    async setBusquedaItems(text: string) {
        await ElementActions.setText(this.barraBusqueda, text);
    }
    async buttonSearchItems() {
        await ElementActions.click(this.buttonBuscar);
    }

  
}
