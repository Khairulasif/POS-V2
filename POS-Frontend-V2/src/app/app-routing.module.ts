import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';


const routes: Routes = [
  {path: "purchase" , component: PurchaseComponent},
  {path: "supplier" , component: AddsupplierComponent},
  {path: " " , component: DashboardComponent},
  

  {path: "**" , component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
