import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private url = 'http://localhost:8080/sale';

  private urls = 'http://localhost:8080/stockReceived';

  private urlGetPrice = 'http://localhost:8080';

  private urlGet = 'http://localhost:8080/stockReceived';



  constructor(private httpService: HttpClient) { }



  

 
  
}
