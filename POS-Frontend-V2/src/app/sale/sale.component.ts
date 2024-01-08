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

  stockid!: number;

  basePrice!: StockReceived [];

  stockList: StockReceived[] = [];

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
        productName: ['', Validators.required],
        productType: ['', Validators.required],
        saleDate: ['', Validators.required],
        price: ['', Validators.required],
        discount: ['', Validators.required],
        totalAmount: ['', Validators.required],
        terms1: ['Our warranty offers coverage for a specified duration, ranging from 30 days to one year, ensuring buyers have peace of mind for an agreed-upon timeframe.'],
        terms2: ['The warranty covers essential components, including but not limited to the engine, transmission, and major systems critical to the vehicles performance.'],
        terms3: ['We transparently outline any exceptions to the warranty coverage, such as normal wear and tear, routine maintenance, and damages resulting from accidents or misuse.'],
        terms4: ['Our warranty terms specify whether the coverage is transferable to subsequent owners, providing clarity on the continuity of protection beyond the initial purchase.'],
        terms5: ['In the event of a warranty claim, buyers are guided through a clear and efficient process, including contacting us, providing proof of purchase, and utilizing authorized repair facilities for prompt resolution.'],
        terms6: ['We define the responsibilities regarding repair costs, clarifying whether the seller or buyer is responsible for covering expenses related to warranted repairs during the specified period.'],
        terms7: ['Our terms set clear limitations on the extent of the sellers liability, establishing a framework for the amount the seller is obligated to pay for covered repairs.'],
        terms8: ['Buyers are informed about the impact of unauthorized modifications or repairs, specifying conditions under which the warranty may be voided.'],
        terms9: ['To maintain eligibility for warranty coverage, buyers are required to keep and provide specific documentation, ensuring a straightforward process for both parties'],
        terms10: ['Our warranty terms are crafted to align with local laws and regulations governing vehicle sales and warranties, providing a legally compliant framework for our buyers.'],
        comment: ['', Validators.required],
      }),

      customer: this.formBuilder.group({

        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phoneNumber: ['', Validators.required],


      }),
    });
    this.saleForm.get('sale.discount')?.valueChanges.subscribe(discount => {
      this.calculateTotalAmount(discount);
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

  onProductSelectionChange(): void {
    const selectedProductId = this.saleForm.get('sale.product.productName')?.value;
  
    // Find the selected product in stockList
    const selectedProduct = this.stockList.find(product => product.product.productId === selectedProductId);
  
    if (selectedProduct) {
      // Update the relevant fields in the form with the selected product details
      this.saleForm.patchValue({
        sale: {
          productType: selectedProduct.product.productCategory,
          price: selectedProduct.mrp,
          // Add other fields as needed
        },
      });
      
      // Calculate total amount based on the updated fields
      this.calculateTotalAmount(this.saleForm.get('sale.discount')?.value);
    }
  }
  



  // onSubmit() {
  //   if (this.saleForm.valid) {
  //     const formData = this.saleForm.value;

  //     console.log(formData);


  //     this.services.saveSale(formData).subscribe(
  //       response => {
  //         console.log('Data saved successfully', response);
  //         this.router.navigateByUrl("saleList");
  //       },
  //       error => {
  //         console.error('Error saving data', error);
  //       }
  //     );
  //   }
  // }

}
