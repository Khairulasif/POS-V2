import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from './SupplierModel';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class AddsupplierService {

  private url = 'http://localhost:8080/supplier';


  constructor(private httpService: HttpClient) {}

  addSupplier(task:Supplier) {
    return this.httpService.post<Supplier>(this.url + '/save' , task, httpOptions);
  }
}
