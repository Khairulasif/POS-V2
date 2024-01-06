import { Component, OnInit } from '@angular/core';
import { SupplierList } from './SupplierListModel';
import { PurchaseService } from './purchase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Purchase } from './PurchaseModel';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit{

  purchaseForm!: FormGroup;

  supplierList: SupplierList[] = [];

  selectedSupplier!: number;

  supplierType!: string;

  purchase: Purchase = {
    purchaseId: 0,
    purchaseDate: new Date().toISOString(),
    deliveryAddress: '',
    status: false,
    supplier: {
      supplierId: 0,
      supplierType: '',
      supplierName: '',
      contactPerson: '',
      email: '',
      phoneNumber: ''
    },
    products: [
      {
        productId: 0,
        slNumber: undefined,
        productCategory: 'SEDAN',
        productName: '',
        registrationNo: '',
        chassisNumber: '',
        engineNumber: '',
        cubicCapacity: '',
        noOfTyres: undefined,
        numberOfCylinders: undefined,
        yearOfManufacture: new Date().toISOString(),
        body: '',
        mileage: undefined,
        drive: '',
        seatingCapacity: undefined,
        fuelType: '',
        exteriorColor: '',
        carFeatures: '',
        exportedFrom: '',
        tradePrice: undefined,
        tax: undefined,
        vat: undefined,
        payment: '',
        discount: undefined,
        grossCost: undefined
      }
    ]
  };

 

  constructor(private service: PurchaseService,  private router: Router, 
    private formBuilder: FormBuilder ) {}


  ngOnInit(): void {
   
  }



  
  onSupplierTypeChange() {
    if (this.supplierType) {
      this.getSuppliersByType(this.supplierType);
    }
  }

  

  getSuppliersByType(supplierType: string) {
    this.service.getSuppliersByType(supplierType).subscribe(
      (data: SupplierList[]) => {
        this.supplierList = data;
        
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }

  // calculateTotalAmount(): void {
  //   // Adjust this according to your actual ngModel bindings
  //   const tradePrice = this.purchase.products[0].tradePrice || 0;
  //   const discount = this.purchase.products[0].discount || 0;
  //   const vat = this.purchase.products[0].vat || 0;  // Add this line
  //   const tax = this.purchase.products[0].tax || 0;  // Add this line
  
  //   // Calculate the gross cost by adding VAT and tax
  //   const grossCost = (tradePrice + vat + tax) - discount;
  
  //   // Update the grossCost in the ngModel
  //   this.purchase.products[0].grossCost = grossCost;
  // }

  calculateTotalAmount(): void {
    // Adjust this according to your actual ngModel bindings
    const tradePrice = this.purchase.products[0].tradePrice || 0;
    const discount = this.purchase.products[0].discount || 0;
    const vatPercentage = this.purchase.products[0].vat || 0;  // Assuming vat is provided as a percentage
    const taxPercentage = this.purchase.products[0].tax || 0;  // Assuming tax is provided as a percentage
  
    // Convert percentages to decimal values
    const vatMultiplier = (1 + vatPercentage / 100);
    const taxMultiplier = (1 + taxPercentage / 100);
  
    // Calculate the gross cost by adding VAT and tax
    const grossCost = (tradePrice * vatMultiplier * taxMultiplier) - discount;
  
    // Update the grossCost in the ngModel
    this.purchase.products[0].grossCost = grossCost;
  }

  // calculateTotalAmount(): void {
  //   // Adjust this according to your actual ngModel bindings
  //   const tradePrice = this.purchase.products[0].tradePrice || 0;
  //   const discount = this.purchase.products[0].discount || 0;
  //   const vatPercentage = this.purchase.products[0].vat || 0;  // Assuming vat is provided as a percentage
  //   const taxPercentage = this.purchase.products[0].tax || 0;  // Assuming tax is provided as a percentage
  
  //   // Convert percentages to decimal values
  //   const vatMultiplier = (1 + vatPercentage / 100);
  //   const taxMultiplier = (1 + taxPercentage / 100);
  
  //   // Calculate the gross cost by adding VAT and tax only on the trade price
  //   const grossCost = (tradePrice * vatMultiplier) + (tradePrice * taxMultiplier) - discount;
  
  //   // Update the grossCost in the ngModel
  //   this.purchase.products[0].grossCost = grossCost;
  // }
  
  
  
  

  savePurchase(): void {
    console.log(this.selectedSupplier);
    this.purchase.supplier.supplierId = this.selectedSupplier;
    this.service.savePurchase(this.purchase)
      .subscribe((response) => {
        console.log('Purchase saved successfully:', response);
        this.router.navigateByUrl("purchaseList");
        // Handle success or navigate to another page
      }, (error) => {
        console.error('Error occurred while saving purchase:', error);
        // Handle error
      });
  }
  

}
