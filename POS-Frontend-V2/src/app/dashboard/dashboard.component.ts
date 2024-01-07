import { Component, OnInit } from '@angular/core';
import { Purchase } from './PurchaseListModel';
import { DashboardService } from './dashboard.service';
import { StockReceived } from './StockReceiveModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  purchaseList: Purchase[] = [];

  stockList: StockReceived[] = [];

  constructor(private service: DashboardService, private router: Router,) {}

  ngOnInit(): void {
   
    this.fetchPurchaseByCurrentDate();
  }

  fetchPurchaseByCurrentDate(): void {
    this.service.getAllPurchaseByCurrentDate().subscribe((data: Purchase[]) => {
      this.purchaseList = data;
      console.log(this.purchaseList);
      
    });

    this.service.getAllStock().subscribe((data: StockReceived[]) => {
      this.stockList = data;
      console.log(this.stockList);
      
    });
  }

  getYearOfSaleDate(sale: StockReceived): string | null {
    // Assuming yearOfManufacture is a property in the productDetails object
    return sale?.product.yearOfManufacture || null;
  }

  navigateToList() {
    this.router.navigateByUrl("stockList");
    
  }

}
