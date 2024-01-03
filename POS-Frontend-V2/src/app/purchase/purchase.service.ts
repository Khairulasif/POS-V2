import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SupplierList } from './SupplierListModel';


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

  constructor(private httpClient: HttpClient) {}

  getSuppliersByType(supplierType: string): Observable<SupplierList[]> {
    return this.httpClient.get<SupplierList[]>(`${this.apiUrl}/getSuppliersByType/${supplierType}`);
  }

}
