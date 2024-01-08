import { Component, OnInit } from '@angular/core';
import { StockReceived } from './SaleStockListModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaleService } from './sale.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
 
  stockList!: StockReceived[];

  basePrice!: StockReceived[];

  saleForm!: FormGroup;

  constructor(private services: SaleService,
    private router: Router, 
    private formBuilder: FormBuilder,) { }


  ngOnInit(): void {
    
    this.services.getStock().subscribe((newPost: StockReceived[]) => {
      this.stockList = newPost;
      console.log(this.stockList);
      
    });

    this.createForm();
  }

  createForm(): void {
    this.saleForm = this.formBuilder.group({
      sale: this.formBuilder.group({
        saleDate: [''],
        price: [0],
        discount: [0],
        totalAmount: [0],
        terms1: [''],
        terms2: [''],
        terms3: [''],
        terms4: [''],
        terms5: [''],
        terms6: [''],
        terms7: [''],
        terms8: [''],
        terms9: [''],
        terms10: [''],
        comment: [''],

        stockReceived: this.formBuilder.group({
          product: this.formBuilder.group({
            productCategory: [''],
          }),
          srid: [],
        }),
      }),

      customer: this.formBuilder.group({
        customerId: [0],
        firstName: [''],
        lastName: ['' ],
        email: ['' ],
        phoneNumber: [''],
      }),
    });

    this.saleForm.get('sale.discount')?.valueChanges.subscribe(discount => {
      this.calculateTotalAmount(discount);
    });
  }

  onProductSelectionChange(): void {
    const selectedStockId = this.saleForm.get('sale.srid')?.value;

    console.log("--------", selectedStockId);
    

    // Fetch purchase details based on the selected stockId
    this.services.find(selectedStockId).subscribe((task: StockReceived[]) => {
      this.basePrice = task;

      console.log(this.basePrice);
      

      // Assuming you have a single purchase for a stockId
      if (this.basePrice.length > 0) {
        // Update the price field in the form with the fetched price
        this.saleForm.patchValue({
          sale: {
            price: this.basePrice[0].mrp,
          },
        });
        this.calculateTotalAmount(this.saleForm.get('sale.discount')?.value);
      }
    });
  }

  calculateTotalAmount(discount: number): void {
    const price = this.saleForm.get('sale.price')?.value || 0;
    const calculatedTotalAmount = price - discount;

    // Set the calculated total amount in the form
    this.saleForm.patchValue({
      sale: {
        totalAmount: calculatedTotalAmount,
      },
    });
  }


  onSubmit() {
    if (this.saleForm.valid) {
      const formData = this.saleForm.value;

      console.log(formData);
      
     
      this.services.saveSale(formData).subscribe(
        response => {
          console.log('Data saved successfully', response);
          this.router.navigateByUrl("saleList");
        },
        error => {
          console.error('Error saving data', error);
        }
      );
    }
  }

}
