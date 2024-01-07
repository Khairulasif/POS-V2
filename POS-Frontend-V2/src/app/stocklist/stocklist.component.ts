import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from '../dashboard/PurchaseListModel';
import { StockReceived } from './StockListModel';
import { StocklistService } from './stocklist.service';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit{

  searchProduct!:string;

  originalStocks: StockReceived[] = [];

  stockList: StockReceived[] = [];

  constructor(private service: StocklistService, private router: Router,) {}

  ngOnInit(): void {
   
    this.fetchPurchaseByCurrentDate();
  }

  fetchPurchaseByCurrentDate(): void {
    

    // this.service.getAllStock().subscribe((data: StockReceived[]) => {
    //   this.stockList = data;
    //   console.log(this.stockList);
      
    // });

    this.service.getAllStock().subscribe((data: StockReceived[]) => {
      this.stockList = data;
      this.originalStocks = [...this.stockList]; // Make a copy for initial display
    });
  }

  getYearOfManufacture(sale: StockReceived): string | null {
    // Assuming yearOfManufacture is a property in the productDetails object
    return sale?.product.yearOfManufacture || null;
  }

  searchByProduct(): void {
    if (this.searchProduct) {
      // Use the Array.filter method to filter the originalStocks
      this.stockList = this.originalStocks.filter((stock) => {
        // Assuming productName is a string
        return stock.product.productName.toLowerCase().includes(this.searchProduct.toLowerCase());
      });
    } else {
      // If the search product is empty, show the original list
      this.stockList = [...this.originalStocks];
    }
  }

}
