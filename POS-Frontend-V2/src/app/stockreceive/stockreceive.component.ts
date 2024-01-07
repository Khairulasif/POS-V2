import { Component, OnInit } from '@angular/core';
import { StockreceiveService } from './stockreceive.service';
import { Product, Purchase, Supplier } from './PurchaseListModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StockReceived } from './StockReceiveModel';


@Component({
  selector: 'app-stockreceive',
  templateUrl: './stockreceive.component.html',
  styleUrls: ['./stockreceive.component.css']
})
export class StockreceiveComponent  implements OnInit{

  purchaseList: Purchase[] = [];

  selectedPurchaseId!: number;

  selectedProduct!: Product;

  selectedSupplier!: Supplier;

  productCategoryValue: string = '';

  costForm: StockReceived = {
    importCost: null,
    cAndFCost: null,
    transportCost: null,
    documentCost: null,
    repairCost: null,
    netCost: null,
    mrp: null,
    maxDiscount: null,
    installment: false,
    product: {
      productId: 0,
      productCategory: '',
    },
  };
 

  constructor(private service: StockreceiveService, private fb: FormBuilder,) {}

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

    this.costForm.product = {
        productId: 0,
        productCategory: '',
      };
    
  }


  setProductCategory(category: string): void {
    if (this.costForm.product) {
      this.costForm.product.productCategory = category;
    }
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

    this.selectedSupplier = selectedPurchase.supplier || null;
    console.log('Selected Suppler:', this.selectedSupplier);

    if (this.selectedProduct) {
      // Ensure that costForm.product is initialized before accessing its properties
      this.costForm.product = this.costForm.product || { productId: 0, productCategory: '' };

      this.costForm.product.productCategory = this.selectedProduct.productCategory;
      this.costForm.product.productId = this.selectedProduct.productId;
    }
    
    
  }
  
  getYearOfSaleDate(sale: Product): string | null {
    // Assuming yearOfManufacture is a property in the productDetails object
    return sale?.yearOfManufacture || null;
  }

  // Inside your component class
calculateNetCost(): number {
  // Assuming selectedProduct is defined and contains a grossCost property
  const grossCost = this.selectedProduct?.grossCost || 0;

  // Other cost inputs
  const importCost = this.costForm.importCost || 0;
  const cAndFCost = this.costForm.cAndFCost || 0;
  const transportCost = this.costForm.transportCost || 0;
  const documentCost = this.costForm.documentCost || 0;
  const repairCost = this.costForm.repairCost || 0;

  // Calculate net cost
  const netCost = grossCost + importCost + cAndFCost + transportCost + documentCost + repairCost;

  return netCost;
}

updateNetCost(value: number) {
  // You can handle the value change if needed, but for now, let's just update the net cost
  this.costForm.netCost = this.calculateNetCost();
}







  onSubmit() {
    this.costForm.netCost = this.calculateNetCost();
    console.log('Form data to be saved:', this.costForm);

    // Call your service method to save the data
    this.service.saveStockReceivedData(this.costForm).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
        // Handle success, e.g., show a success message
      },
      (error) => {
        console.error('Error saving data:', error);
        // Handle error, e.g., show an error message
      }
    );
  }
  
  
 
}
