import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockReceived } from './StockListModel';

@Injectable({
  providedIn: 'root'
})
export class StocklistService {

  private apiUrl = 'http://localhost:8080/stockReceived';
  private apiPurUrl = 'http://localhost:8080/purchase';

  constructor(private http: HttpClient) { }

  

  getAllStock(): Observable<StockReceived[]> {
    return this.http.get<StockReceived[]>(`${this.apiUrl}/getAllStockReceived`);
  }
}
