import { Component, OnInit } from '@angular/core';
import { SupplierList } from './SupplierListModel';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit{



  supplierList!: SupplierList;

  


  ngOnInit(): void {


   
  }

}
