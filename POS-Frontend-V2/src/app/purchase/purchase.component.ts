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

  supplierType!: string;

  purchase: Purchase = {
    purchaseId: 0,
    purchaseDate: new Date().toISOString(),
    deliveryAddress: '',
    status: true,
    supplier: {
      supplierId: 0,
      supplierType: 'string',
      supplierName: 'string',
      contactPerson: 'string',
      email: 'string',
      phoneNumber: 'string'
    },
    products: [
      {
        productId: 0,
        slNumber: 0,
        productCategory: 'SEDAN',
        productName: 'string',
        registrationNo: 'string',
        chassisNumber: 'string',
        engineNumber: 'string',
        cubicCapacity: 'string',
        noOfTyres: 0,
        numberOfCylinders: 0,
        yearOfManufacture: new Date().toISOString(),
        body: 'string',
        mileage: 0,
        drive: 'string',
        seatingCapacity: 0,
        fuelType: 'string',
        exteriorColor: 'string',
        carFeatures: 'string',
        exportedFrom: 'string',
        tradePrice: 0,
        tax: 0,
        vat: 0,
        payment: 'string',
        discount: 0,
        grossCost: 0
      }
    ]
  };

  constructor(private service: PurchaseService,  private router: Router, 
    private formBuilder: FormBuilder ) {}


  ngOnInit(): void {
    // this.buildForm();
  }



  // buildForm() {
  //   this.purchaseForm = this.formBuilder.group({
  //     purchase: this.formBuilder.group({
  //       purchaseDate: ['', Validators.required],
  //       price: ['', Validators.required],
  //       payment: ['', Validators.required],
  //       discount: ['', Validators.required],
  //       totalAmount: ['', Validators.required],
  //       deliveryAddress: ['', Validators.required],
  //       warranty: ['', Validators.required],
  //     }),
  //     stock: this.formBuilder.group({
  //       quantity: ['', Validators.required],
  //     }),
  //     product: this.formBuilder.group({
  //       productName: ['', Validators.required],
  //       productType: ['', Validators.required],
  //       model: ['', Validators.required],
  //     }),
  //     productDetails: this.formBuilder.group({
  //       registrationNo: ['', Validators.required],
  //       chassisNumber: ['', Validators.required],
  //       engineNumber: ['', Validators.required],
  //       cubicCapacity: ['', Validators.required],
  //       noOfTyres: ['', Validators.required],
  //       numberOfCylinders: ['', Validators.required],
  //       yearOfManufacture: ['', Validators.required],
  //       mileage: ['', Validators.required],
  //       drive: ['', Validators.required],
  //       seatingCapacity: ['', Validators.required],
  //       fuelType: ['', Validators.required],
  //       exteriorColor: ['', Validators.required],
  //       carFeatures: ['', Validators.required],
  //       body: ['', Validators.required],
  //       exportedFrom: ['', Validators.required],
  //       }),
  //     supplier: this.formBuilder.group({
  //       supplierId: [],
  //     }),
  //   });

  //   // this.purchaseForm.get('purchase.discount')?.valueChanges.subscribe(discount => {
  //   //   this.calculateTotalAmount(discount);
  //   // });
  // }

  onSupplierTypeChange() {
    if (this.supplierType) {
      this.getSuppliersByType(this.supplierType);
    }
  }

  getSuppliersByType(supplierType: string) {
    this.service.getSuppliersByType(supplierType).subscribe(
      (data: SupplierList[]) => {
        this.supplierList = data;
        console.log(this.supplierList);
        
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }

  savePurchase(): void {
    this.service.savePurchase(this.purchase)
      .subscribe((response) => {
        console.log('Purchase saved successfully:', response);
        // Handle success or navigate to another page
      }, (error) => {
        console.error('Error occurred while saving purchase:', error);
        // Handle error
      });
  }

}
