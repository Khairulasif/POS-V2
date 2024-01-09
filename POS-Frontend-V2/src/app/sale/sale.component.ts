import { Component, OnInit } from '@angular/core';
import { StockReceived } from './SaleStockListModel';
import { Router, ActivatedRoute } from '@angular/router';
import { SaleService } from './sale.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SaleModel } from './SaleModel';




@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {



  id!: number;

  product!: StockReceived;

  saleForm!: FormGroup;
  

  constructor(
    private services: SaleService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['postId'];
    this.services.find(this.id).subscribe((task: StockReceived) => {
      this.product = task
      console.log(this.product);

    });



    this.createForm();

    // this.saleForm.patchValue({
    //   stockReceived: {
    //     sRId: this.product?.srid,
    //     productCategory: this.product?.product?.productCategory,
    //   },
    // });

  }


  createForm(): void {
    this.saleForm = this.fb.group({
      sale: this.fb.group({
        saleDate: [''],
        price: [''],
        discount: [''],
        totalAmount: [''],
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
        comment: [''],
      }),
      stockReceived: this.fb.group({
        sRId: [],
        product: this.fb.group({
          productCategory: [],
        }),
      }),
      customer: this.fb.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        phoneNumber: [''],
      }),
    });
  }
  


  saveData(): void {
    const saleData: SaleModel = this.saleForm.value;

    this.services.saveSale(saleData).subscribe(
      (response) => {
        // Handle success, e.g., navigate to a confirmation page
        this.router.navigate(['/confirmation']);
      },
      (error) => {
        // Handle error, e.g., display an error message
        console.error('Error saving sale:', error);
      }
    );
  }



}
