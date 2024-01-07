import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { PurchaselistComponent } from './purchaselist/purchaselist.component';
import { StockreceiveComponent } from './stockreceive/stockreceive.component';
import { AvailableproductComponent } from './availableproduct/availableproduct.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { SaleComponent } from './sale/sale.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    PurchaseComponent,
    AddsupplierComponent,
    PurchaselistComponent,
    StockreceiveComponent,
    AvailableproductComponent,
    StocklistComponent,
    SaleComponent,

   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
