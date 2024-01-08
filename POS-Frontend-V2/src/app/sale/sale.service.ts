import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockReceived } from './SaleStockListModel';
import { Observable } from 'rxjs';
import { Sale } from './SaleModel';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private url = 'http://localhost:8080/sale';

  private urls = 'http://localhost:8080/stockReceived';

  private urlGetPrice = 'http://localhost:8080';

  private urlGet = 'http://localhost:8080/stockReceived';



  constructor(private httpService: HttpClient) { }



  saveSale(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const requestBody = {
      productName: data.sale.productName,
      productType: data.sale.productType,
      saleDate: data.sale.saleDate,
      price: data.sale.price,
      discount: data.sale.discount,
      totalAmount: data.sale.totalAmount,
      terms1: data.sale.terms1,
        terms2: data.sale.terms2,
        terms3: data.sale.terms3,
        terms4: data.sale.terms4,
        terms5: data.sale.terms5,
        terms6: data.sale.terms6,
        terms7: data.sale.terms7,
        terms8: data.sale.terms8,
        terms9: data.sale.terms9,
        terms10: data.sale.terms10,
        comment: data.sale.comment,
      stock: {
        stockId: data.stock.stockId,
      },
      customer: {
        firstName: data.customer.firstName,
        lastName: data.customer.lastName,
        email: data.customer.email,
        phoneNumber: data.customer.phoneNumber,

      },
    };
    console.log('Request Body:', requestBody);
    return this.httpService.post<any>(`${this.url}/save`, requestBody, { headers });
  }

  getStock(): Observable<StockReceived[]> {
    const task = this.httpService.get<StockReceived[]>(this.urls + '/getAllStockReceived');
    return task;
  }

  find(stockId: number): Observable<StockReceived[]> {
    return this.httpService.get<StockReceived[]>(`${this.urlGet}/getStockReceived/${stockId}`);
  }
}
