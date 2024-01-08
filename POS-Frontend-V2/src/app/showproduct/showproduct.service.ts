import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowproductService {

  private url = 'http://localhost:8080/stockReceived';



  constructor(private httpService: HttpClient) { }


  find(id:number) : Observable<any>{
    return this.httpService.get(this.url + '/getStockReceived/' + id)
  }
}
