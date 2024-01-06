import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from './PurchaseListModel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StockreceiveService {

  private apiUrl = 'http://localhost:8080/supplier';
  
  private apiPUrl = 'http://localhost:8080/purchase';

  constructor(private httpClient: HttpClient) {}

  getPurchasesByStatus(): Observable<Purchase[]> {
    return this.httpClient.get<Purchase[]>(`${this.apiPUrl}/getPurchasesByStatus`);
  }
  

}
