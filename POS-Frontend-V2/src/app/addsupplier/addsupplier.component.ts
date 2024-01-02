import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AddsupplierService } from './addsupplier.service';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css']
})
export class AddsupplierComponent implements OnInit{

  supplierForm!: FormGroup;

  constructor(private services: AddsupplierService,
    private router: Router) { }

  ngOnInit(): void {

    this.supplierForm = new FormGroup({
      supplierType: new FormControl(''),
      supplierName: new FormControl(''),
      contactPerson: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      
    })
    
  }


  onSubmit() {
   
    this.services.addSupplier(this.supplierForm.value).subscribe((res:any) => {
      console.log('Post created successfully');
      // this.router.navigateByUrl('employeeList');
    })

}
}
