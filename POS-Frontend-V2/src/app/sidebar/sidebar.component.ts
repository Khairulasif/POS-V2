import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  selectedNavItem: string | null = null;
  public fullName : string = "";
  public role!:string;




  constructor(
    private router: Router, 
    private renderer: Renderer2, 
    private el: ElementRef,
   ) {}


  ngOnInit(): void {

    
    
  }

  navigatePurchase() {
    this.router.navigateByUrl("purchase");
    this.activateNavItem('purchase');
  }

  navigateSale() {
    this.router.navigateByUrl("sale");
    this.activateNavItem('sale');
  }
  navigateStockReceive() {
    this.router.navigateByUrl("stockReceive");
    this.activateNavItem('stockReceive');
  }
  
  navigateSaleList() {
    this.router.navigateByUrl("saleList");
    this.activateNavItem('saleList');
  }

  navigateHome() {
    this.router.navigateByUrl("home");
    this.activateNavItem('home');
  }
  navigatepurchaseList() {
    this.router.navigateByUrl("purchaseList");
    this.activateNavItem('purchaseList');
  }

  navigateWarranty() {
    this.router.navigateByUrl("checkService");
    this.activateNavItem('checkService');
  }

  navigateInvoice() {
    this.router.navigateByUrl("invoice");
    this.activateNavItem('invoice');
  }

  navigateSupplier() {
    this.router.navigateByUrl("supplier");
    this.activateNavItem('supplier');
  }


  


  private activateNavItem(item: string) {
    // Deactivate previously selected item
    if (this.selectedNavItem) {
      const prevNavItem = this.el.nativeElement.querySelector(`[data-item="${this.selectedNavItem}"]`);
      this.renderer.removeClass(prevNavItem, 'nav-item-active');
    }

    // Activate the clicked item
    const currentNavItem = this.el.nativeElement.querySelector(`[data-item="${item}"]`);
    this.renderer.addClass(currentNavItem, 'nav-item-active');

    // Update selectedNavItem
    this.selectedNavItem = item;
  }
  


  





  

  // navigateTest() {
  //   this.router.navigateByUrl("test");
   
  // }

  // public isLoggedIn() {
  //   return this.userAuthService.isLoggedIn();
  // }

  // public logout() {
  //   this.userAuthService.clear();
  //   this.router.navigateByUrl("/login");
  // }
}
