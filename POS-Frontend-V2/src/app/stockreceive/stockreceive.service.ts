import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from './PurchaseListModel';
import { Observable } from 'rxjs/internal/Observable';
import { StockReceived } from './StockReceiveModel';

@Injectable({
  providedIn: 'root'
})
export class StockreceiveService {

  private apiUrl = 'http://localhost:8080/stockReceived';
  
  private apiPUrl = 'http://localhost:8080/purchase';

  constructor(private httpClient: HttpClient) {}

  getPurchasesByStatus(): Observable<Purchase[]> {
    return this.httpClient.get<Purchase[]>(`${this.apiPUrl}/getPurchasesByStatus`);
  }
  
  saveStockReceivedData(data: StockReceived): Observable<any> {
    return this.httpClient.post<StockReceived>(`${this.apiUrl}/save`, data);
   
  }

}
