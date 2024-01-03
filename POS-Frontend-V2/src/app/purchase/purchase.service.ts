import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SupplierList } from './SupplierListModel';
import { Purchase } from './PurchaseModel';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private apiUrl = 'http://localhost:8080/supplier';
  
  private apiPUrl = 'http://localhost:8080/purchase/save';

  constructor(private httpClient: HttpClient) {}

  getSuppliersByType(supplierType: string): Observable<SupplierList[]> {
    return this.httpClient.get<SupplierList[]>(`${this.apiUrl}/getSuppliersByType/${supplierType}`);
  }


  savePurchase(purchase: Purchase): Observable<Purchase> {
    return this.httpClient.post<Purchase>(this.apiPUrl, purchase);
  }

}
