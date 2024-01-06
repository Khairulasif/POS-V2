import { Component, OnInit } from '@angular/core';
import { Purchase } from './PurchaseListModel';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  purchaseList: Purchase[] = [];

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
   
    this.fetchPurchaseByCurrentDate();
  }

  fetchPurchaseByCurrentDate(): void {
    this.service.getAllPurchaseByCurrentDate().subscribe((data: Purchase[]) => {
      this.purchaseList = data;
      console.log(this.purchaseList);
      
    });
  }

}
