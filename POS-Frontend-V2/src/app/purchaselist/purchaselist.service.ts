import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from './PurchaseListModel';

@Injectable({
  providedIn: 'root'
})
export class PurchaselistService {

  private apiUrl = 'http://localhost:8080/stock';
  private apiPurUrl = 'http://localhost:8080/purchase';

  constructor(private http: HttpClient) { }

  getAllPurchase(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(`${this.apiPurUrl}/getAllPurchase`);
  }
}
