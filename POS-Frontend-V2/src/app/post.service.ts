import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modelType } from './hrCreate/model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient ) { }

  private url = 'http://localhost:3000/posts'

  getTask() {
    return this.http.get<modelType[]>(this.url)
  }
  

  addTask(task:modelType){
    return this.http.post<modelType>(this.url, task)
  }


  find(id:number) : Observable<any>{
    return this.http.get(this.url + '/' + id)
  }



  delete(id:number){
    return this.http.delete(this.url  + '/'+ id)
  
   
  }

  updateTask(id:number, task:modelType): Observable<any>{

    return this.http.put(this.url + '/' + id, task)
  }

  // updateTask(task: modelType) {
  //   return this.http.put<modelType>(this.url + '/' + task.id, task)
  // }
}
