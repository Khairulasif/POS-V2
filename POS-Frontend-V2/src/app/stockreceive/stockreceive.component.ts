import { Component, OnInit } from '@angular/core';
import { StockreceiveService } from './stockreceive.service';
import { Product, Purchase } from './PurchaseListModel';


@Component({
  selector: 'app-stockreceive',
  templateUrl: './stockreceive.component.html',
  styleUrls: ['./stockreceive.component.css']
})
export class StockreceiveComponent  implements OnInit{

  purchaseList: Purchase[] = [];

  selectedPurchaseId!: number;

  selectedProduct!: Product;
 

  constructor(private service: StockreceiveService) {}

  ngOnInit(): void {
    this.service.getPurchasesByStatus().subscribe(
      (data) => {
        this.purchaseList = data;
        console.log('Purchase List:', this.purchaseList);
      },
      (error) => {
        console.error('Error fetching purchases:', error);
      }
    );
  }

  onSelectChange() {
    console.log('Selected Purchase ID:', this.selectedPurchaseId);
    
    const selectedPurchase = this.purchaseList.find(purchase => purchase.purchaseId == this.selectedPurchaseId);
    console.log('Selected Purchase:', selectedPurchase);
  
    if (!selectedPurchase) {
      console.error('Selected purchase not found in the list');
      return;
    }
  
    this.selectedProduct = selectedPurchase.products[0] || null;
    console.log('Selected Product:', this.selectedProduct);
  }
  
  getYearOfSaleDate(sale: Product): string | null {
    // Assuming yearOfManufacture is a property in the productDetails object
    return sale?.yearOfManufacture || null;
  }
  
  
  

}
