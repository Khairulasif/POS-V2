import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleForm } from './SaleModel';



@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private url = 'http://localhost:8080/stockReceived';

  private urls = 'http://localhost:8080/sale';

  private urlGetPrice = 'http://localhost:8080';

  private urlGet = 'http://localhost:8080/stockReceived';



  constructor(private httpService: HttpClient) { }



  
  find(id:number) : Observable<any>{
    return this.httpService.get(this.url + '/getStockReceived/' + id)
  }


  saveSale(sale: SaleForm): Observable<any> {
    const url = `${this.urls}/save`; // Adjust the endpoint according to your backend API
    return this.httpService.post(url, sale);
  }
 
  
}
