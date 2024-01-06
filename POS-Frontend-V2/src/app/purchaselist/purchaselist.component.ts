import { Component, OnInit } from '@angular/core';
import { Purchase } from './PurchaseListModel';
import { PurchaselistService } from './purchaselist.service';

@Component({
  selector: 'app-purchaselist',
  templateUrl: './purchaselist.component.html',
  styleUrls: ['./purchaselist.component.css']
})
export class PurchaselistComponent implements OnInit{

  originalPurchaseList: Purchase[] = [];
  purchaseList: Purchase[] = [];
  searchDate!: string; // Add this property for storing the search date

  constructor(private service: PurchaselistService) {}

  ngOnInit(): void {
    this.fetchStock();
  }

  fetchStock(): void {
    this.service.getAllPurchase().subscribe((data: Purchase[]) => {
      this.originalPurchaseList = data;
      this.filterPurchaseList();
    });
  }

  // Modify the method to filter the originalPurchaseList based on the searchDate
  searchByDate(): void {
    this.filterPurchaseList();
  }

  private filterPurchaseList(): void {
    if (this.searchDate) {
      // Use the Array.filter method to filter the originalPurchaseList
      this.purchaseList = this.originalPurchaseList.filter((purchase) => {
        // Assuming purchaseDate is a string in the format 'YYYY-MM-DDTHH:mm:ss.SSSZ'
        return purchase.purchaseDate.startsWith(this.searchDate);
      });
    } else {
      // If the search date is empty, show the original list
      this.purchaseList = [...this.originalPurchaseList];
    }
  }

  getYearOfPurchaseDate(purchase: Purchase): string | null {
    // Assuming yearOfManufacture is a property in the productDetails object
    return purchase?.purchaseDate || null;
  }

}
