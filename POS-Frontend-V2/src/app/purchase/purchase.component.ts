import { Component, OnInit } from '@angular/core';
import { SupplierList } from './SupplierListModel';
import { PurchaseService } from './purchase.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit{

  purchaseForm!: FormGroup;

  supplierList: SupplierList[] = [];

  supplierType!: string;

  constructor(private service: PurchaseService,  private router: Router, 
    private formBuilder: FormBuilder ) {}


  ngOnInit(): void {
    this.buildForm();
  }



  buildForm() {
    this.purchaseForm = this.formBuilder.group({
      purchase: this.formBuilder.group({
        purchaseDate: ['', Validators.required],
        price: ['', Validators.required],
        payment: ['', Validators.required],
        discount: ['', Validators.required],
        totalAmount: ['', Validators.required],
        deliveryAddress: ['', Validators.required],
        warranty: ['', Validators.required],
      }),
      stock: this.formBuilder.group({
        quantity: ['', Validators.required],
      }),
      product: this.formBuilder.group({
        productName: ['', Validators.required],
        productType: ['', Validators.required],
        model: ['', Validators.required],
      }),
      productDetails: this.formBuilder.group({
        registrationNo: ['', Validators.required],
        chassisNumber: ['', Validators.required],
        engineNumber: ['', Validators.required],
        cubicCapacity: ['', Validators.required],
        noOfTyres: ['', Validators.required],
        numberOfCylinders: ['', Validators.required],
        yearOfManufacture: ['', Validators.required],
        mileage: ['', Validators.required],
        drive: ['', Validators.required],
        seatingCapacity: ['', Validators.required],
        fuelType: ['', Validators.required],
        exteriorColor: ['', Validators.required],
        carFeatures: ['', Validators.required],
        body: ['', Validators.required],
        exportedFrom: ['', Validators.required],
        }),
      supplier: this.formBuilder.group({
        supplierId: [],
      }),
    });

    // this.purchaseForm.get('purchase.discount')?.valueChanges.subscribe(discount => {
    //   this.calculateTotalAmount(discount);
    // });
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
        console.log(this.supplierList);
        
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }

}
