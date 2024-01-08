import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowproductService } from './showproduct.service';
import { StockReceived } from './ShowProductModel';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit{


  id!: number;

  product!: StockReceived;

  constructor(
    private services: ShowproductService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['postId'];
    this.services.find(this.id).subscribe((task: StockReceived) => {
      this.product = task
      console.log(this.product);
      
    });
    
  }


  getYearOfManufacture(sale: StockReceived): string | null {
    // Assuming yearOfManufacture is a property in the productDetails object
    return sale?.product.yearOfManufacture || null;
  }
}
