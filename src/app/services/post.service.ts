import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpClient:HttpClient
  ) { }

  public find(id:any):Observable<any>{
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts?id=`+id);
  }

  findAll():Observable<any>{
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts`);
  }
  create(id:any,userId:any,title:any,body:any):Observable<any>{
    return this.httpClient.post<any>('https://jsonplaceholder.typicode.com/posts',{
      id:id,
      userId:userId,
      title:title,
      body:body
    });
  }
  update(id:any,userId:any,title:any,body:any):Observable<any>{
    return this.httpClient.put<any>(`https://jsonplaceholder.typicode.com/posts/`+id,{
      id:id,
      userId:userId,
      title:title,
      body:body
    });
  }

  delete(id:any):Observable<any>{
    return this.httpClient.delete<any>(`https://jsonplaceholder.typicode.com/posts/` + id);
  }
}
