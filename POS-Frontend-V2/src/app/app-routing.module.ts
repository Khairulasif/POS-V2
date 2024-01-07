import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { PurchaselistComponent } from './purchaselist/purchaselist.component';
import { StockreceiveComponent } from './stockreceive/stockreceive.component';
import { StocklistComponent } from './stocklist/stocklist.component';


const routes: Routes = [
  {path: "purchase" , component: PurchaseComponent},
  {path: "supplier" , component: AddsupplierComponent},
  {path: "purchaseList" , component: PurchaselistComponent},
  {path: "stockReceive" , component: StockreceiveComponent},
  {path: "stockList" , component: StocklistComponent},
  {path: " " , component: DashboardComponent},
  

  {path: "**" , component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
