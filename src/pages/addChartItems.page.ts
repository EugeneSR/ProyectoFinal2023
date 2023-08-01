import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";


export class AddChartItemsPage extends BasePage {

    /************Locators***************************/

    private linkProduct: string="(//ul[@class='nav navbar-nav']//a)[2]"; 

    private viewProduct1: string="(//i[@class='fa fa-plus-square'])[1]";
    
    private quantity1:string="#quantity";

    private addToCart1:string="(//button[contains(@class,'btn btn-default')])[1]";

    private continueShopping:string="//button[contains(@class,'btn btn-success')]";

    private viewProduct2: string="(//i[@class='fa fa-plus-square'])[2]";

    private viewProduct3:string="(//i[@class='fa fa-plus-square'])[3]";

    private viewProduct4:string="(//i[@class='fa fa-plus-square'])[4]";

    private viewProduct5:string="(//i[@class='fa fa-plus-square'])[5]";

    private viewProduct6:string="(//i[@class='fa fa-plus-square'])[6]";

    private viewProduct7:string="(//i[@class='fa fa-plus-square'])[7]";

    private viewProduct8:string="(//i[@class='fa fa-plus-square'])[8]";

    private viewProduct9:string="(//i[@class='fa fa-plus-square'])[9]";

    private viewProduct10:string="(//i[@class='fa fa-plus-square'])[10]";

    private viewProduct11:string="(//i[@class='fa fa-plus-square'])[11]";

    private viewProduct12:string="(//i[@class='fa fa-plus-square'])[12]";

    private viewProduct13:string="(//i[@class='fa fa-plus-square'])[13]";

    private viewProduct14:string="(//i[@class='fa fa-plus-square'])[14]";

    private viewProduct15:string="(//i[@class='fa fa-plus-square'])[15]";

    private viewProduct16:string="(//i[@class='fa fa-plus-square'])[16]";

    private viewProduct17:string="(//i[@class='fa fa-plus-square'])[17]";

    private viewProduct18:string="(//i[@class='fa fa-plus-square'])[18]";

    private viewProduct19:string="(//i[@class='fa fa-plus-square'])[19]";

    private viewProduct20:string="(//i[@class='fa fa-plus-square'])[20]";

    private viewProduct21:string="(//i[@class='fa fa-plus-square'])[21]";

    private viewProduct22:string="(//i[@class='fa fa-plus-square'])[22]";

    private viewProduct23:string="(//i[@class='fa fa-plus-square'])[23]";

    private viewProduct24:string="(//i[@class='fa fa-plus-square'])[24]";

    private viewProduct25:string="(//i[@class='fa fa-plus-square'])[25]";

    private viewProduct26:string="(//i[@class='fa fa-plus-square'])[26]";

    private viewProduct27:string="(//i[@class='fa fa-plus-square'])[27]";

    private viewProduct28:string="(//i[@class='fa fa-plus-square'])[28]";

    private viewProduct29:string="(//i[@class='fa fa-plus-square'])[29]";

    private viewProduct30:string="(//i[@class='fa fa-plus-square'])[30]";

    private viewProduct31:string="(//i[@class='fa fa-plus-square'])[31]";

    private viewProduct32:string="(//i[@class='fa fa-plus-square'])[32]";

    private viewProduct33:string="(//i[@class='fa fa-plus-square'])[33]";

    private viewProduct34:string="(//i[@class='fa fa-plus-square'])[34]";

    
    private viewCart:string="//p[@class='text-center']//u[1]"; //Para ver la cola de compras

    private viewIconCart:string="(//ul[@class='nav navbar-nav']//a)[3]"//Link Carts

    private checkout:string="//a[contains(text(),'Proceed To Checkout')]"; //Proceed to checkout

    private continueCart:string="//div[@class='modal-footer']//button[1]"; 

    
    
    //---------ELIMINAR-----------------
    private deleteItems1:string="//a[@data-product-id='1']//i[1]";
    private deleteItems2:string="//a[@data-product-id='2']//i[1]";
    private deleteItems3:string="//a[@data-product-id='3']//i[1]";
    private deleteItems4:string="//a[@data-product-id='4']//i[1]";

   
    private deleteItems5:string="//a[@data-product-id='5']//i[1]";
    private deleteItems6:string="//a[@data-product-id='6']//i[1]";
    private deleteItems7:string="//a[@data-product-id='7']//i[1]";
    private deleteItems8:string="//a[@data-product-id='8']//i[1]";
    private deleteItems9:string="//a[@data-product-id='11']//i[1]";

    private deleteItems10:string="//a[@data-product-id='12']//i[1]";
    private deleteItems11:string="//a[@data-product-id='13']//i[1]";
    private deleteItems12:string="//a[@data-product-id='14']//i[1]";
    private deleteItems13:string="//a[@data-product-id='15']//i[1]";
    private deleteItems14:string="//a[@data-product-id='16']//i[1]";

    private deleteItems15:string="//a[@data-product-id='18']//i[1]";
    private deleteItems16:string="//a[@data-product-id='19']//i[1]";
    private deleteItems17:string="//a[@data-product-id='20']//i[1]";
    private deleteItems18:string="//a[@data-product-id='21']//i[1]";
    private deleteItems19:string="//a[@data-product-id='22']//i[1]";

    private deleteItems20:string="//a[@data-product-id='23']//i[1]";
    private deleteItems21:string="//a[@data-product-id='24']//i[1]";
    private deleteItems22:string="//a[@data-product-id='28']//i[1]";
    private deleteItems23:string="//a[@data-product-id='29']//i[1]";
    private deleteItems24:string="//a[@data-product-id='30']//i[1]";

    private deleteItems25:string="//a[@data-product-id='31']//i[1]";
    private deleteItems26:string="//a[@data-product-id='33']//i[1]";
    private deleteItems27:string="//a[@data-product-id='35']//i[1]";
    private deleteItems28:string="//a[@data-product-id='37']//i[1]";
    private deleteItems29:string="//a[@data-product-id='38']//i[1]";

    private deleteItems30:string="//a[@data-product-id='39']//i[1]";
    private deleteItems31:string="//a[@data-product-id='40']//i[1]";
    private deleteItems32:string="//a[@data-product-id='41']//i[1]";
    private deleteItems33:string="//a[@data-product-id='42']//i[1]";
    private deleteItems34:string="//a[@data-product-id='43']//i[1]";
 
   
    

    constructor() {
        super();
    }
    async linkProducts(){
        await ElementActions.click(this.linkProduct);
    }

    async buttonViewProduct1() {
        await ElementActions.click(this.viewProduct1);
      
    }
    async buttonAddToCart() {
        await ElementActions.click(this.addToCart1);
      
    }
    async buttonContinueAddShopping() {
        await ElementActions.click(this.continueShopping);
       
    }

    /***Product 2  */
    async buttonViewProduct2() {
        await ElementActions.click(this.viewProduct2);
      
    }

    /***Product 3  */
    async buttonViewProduct3() {
        await ElementActions.click(this.viewProduct3);
  
    }

     /***Product 4 */
     async buttonViewProduct4() {
        await ElementActions.click(this.viewProduct4);
  
    }

     /***Product 5 */
     async buttonViewProduct5() {
        await ElementActions.click(this.viewProduct5);
  
    }

     /***Product 6 */
     async buttonViewProduct6() {
        await ElementActions.click(this.viewProduct6);
  
    }

     /***Product 7  */
     async buttonViewProduct7() {
        await ElementActions.click(this.viewProduct7);
  
    }

       /***Product 8*/
       async buttonViewProduct8() {
        await ElementActions.click(this.viewProduct8);
  
    }

      /***Product 9 */
      async buttonViewProduct9() {
        await ElementActions.click(this.viewProduct9);
  
    }

      /***Product 10  */
      async buttonViewProduct10() {
        await ElementActions.click(this.viewProduct10);
  
    }

      /***Product 11  */
      async buttonViewProduct11() {
        await ElementActions.click(this.viewProduct11);
  
    }

     /***Product 12  */
     async buttonViewProduct12() {
        await ElementActions.click(this.viewProduct12);
  
    }
     /***Product 13  */
     async buttonViewProduct13() {
        await ElementActions.click(this.viewProduct13);
  
    }

       /***Product 14  */
       async buttonViewProduct14() {
        await ElementActions.click(this.viewProduct14);
  
    }
       /***Product 15  */
       async buttonViewProduct15() {
        await ElementActions.click(this.viewProduct15);
  
    }
       /***Product 16  */
       async buttonViewProduct16() {
        await ElementActions.click(this.viewProduct16);
  
    }
       /***Product 17  */
       async buttonViewProduct17() {
        await ElementActions.click(this.viewProduct17);
  
    }
       /***Product 18  */
       async buttonViewProduct18() {
        await ElementActions.click(this.viewProduct18);
  
    }
       /***Product 19 */
       async buttonViewProduct19() {
        await ElementActions.click(this.viewProduct19);
  
    }
       /***Product 20 */
       async buttonViewProduct20() {
        await ElementActions.click(this.viewProduct20);
  
    }
       /***Product 21  */
       async buttonViewProduct21() {
        await ElementActions.click(this.viewProduct21);
  
    }
       /***Product 22 */
       async buttonViewProduct22() {
        await ElementActions.click(this.viewProduct22);
  
    }
       /***Product 23  */
       async buttonViewProduct23() {
        await ElementActions.click(this.viewProduct23);
  
    }
       /***Product 24 */
       async buttonViewProduct24() {
        await ElementActions.click(this.viewProduct24);
  
    }
       /***Product 25  */
       async buttonViewProduct25() {
        await ElementActions.click(this.viewProduct25);
  
    }
       /***Product 26 */
       async buttonViewProduct26() {
        await ElementActions.click(this.viewProduct26);
  
    }
       /***Product 27 */
       async buttonViewProduct27() {
        await ElementActions.click(this.viewProduct27);
  
    }
       /***Product 28 */
       async buttonViewProduct28() {
        await ElementActions.click(this.viewProduct28);
  
    }
       /***Product 29 */
       async buttonViewProduct29() {
        await ElementActions.click(this.viewProduct29);
  
    }
       /***Product 30 */
       async buttonViewProduct30() {
        await ElementActions.click(this.viewProduct30);
  
    }
       /***Product 31  */
       async buttonViewProduct31() {
        await ElementActions.click(this.viewProduct31);
  
    }
       /***Product 32 */
       async buttonViewProduct32() {
        await ElementActions.click(this.viewProduct32);
  
    }
       /***Product 33  */
       async buttonViewProduct33() {
        await ElementActions.click(this.viewProduct33);
  
    }
       /***Product 34  */
       async buttonViewProduct34() {
        await ElementActions.click(this.viewProduct34);
  
    }

    async setQuantity(text: string) {
        
          await  ElementActions.setText(this.quantity1,text);
        
    }
    async buttonViewCartShop() {   //link  cart
        await ElementActions.click(this.viewCart);
    }
    async buttonViewCheckout() {
        await ElementActions.click(this.checkout);
    }
  
    //View Icon Cart
    async buttonviewIconCart() {
        await ElementActions.click(this.viewIconCart);
    }

    async buttonViewContinueCart() {
        await ElementActions.click(this.continueCart);
    }

    async buttonDeleteItems(){
        await ElementActions.click(this.deleteItems1);
        await ElementActions.click(this.deleteItems2);
        await ElementActions.click(this.deleteItems3);
        await ElementActions.click(this.deleteItems4);
        await ElementActions.click(this.deleteItems5);
        await ElementActions.click(this.deleteItems6);
        await ElementActions.click(this.deleteItems7);
        await ElementActions.click(this.deleteItems8);
        await ElementActions.click(this.deleteItems9);
        await ElementActions.click(this.deleteItems10);
        await ElementActions.click(this.deleteItems11);
        await ElementActions.click(this.deleteItems12);
        await ElementActions.click(this.deleteItems13);
        await ElementActions.click(this.deleteItems14);
        await ElementActions.click(this.deleteItems15);
        await ElementActions.click(this.deleteItems16);
        await ElementActions.click(this.deleteItems17);
        await ElementActions.click(this.deleteItems18);
        await ElementActions.click(this.deleteItems19);
        await ElementActions.click(this.deleteItems20);
        await ElementActions.click(this.deleteItems21);
        await ElementActions.click(this.deleteItems22);
        await ElementActions.click(this.deleteItems23);
        await ElementActions.click(this.deleteItems24);
        await ElementActions.click(this.deleteItems25);
        await ElementActions.click(this.deleteItems26);
        await ElementActions.click(this.deleteItems27);
        await ElementActions.click(this.deleteItems28);
        await ElementActions.click(this.deleteItems29);
        await ElementActions.click(this.deleteItems30);
        await ElementActions.click(this.deleteItems31);
        await ElementActions.click(this.deleteItems32);
        await ElementActions.click(this.deleteItems33);
        await ElementActions.click(this.deleteItems34);
    }
    
}
