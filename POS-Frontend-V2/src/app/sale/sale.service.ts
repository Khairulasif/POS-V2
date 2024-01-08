import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockReceived } from './SaleStockListModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private url = 'http://localhost:8080/sale';

  private urls = 'http://localhost:8080/stockReceived';

  private urlGetPrice = 'http://localhost:8080';



  constructor(private httpService: HttpClient) { }

  getStock(): Observable<StockReceived[]> {
    const task = this.httpService.get<StockReceived[]>(this.urls + '/getAllStockReceived');
    return task;
  }
}
