import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Post} from  "../dto/post"

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postCollection :AngularFirestoreCollection<Post>;
  baseURL = `https://jsonplaceholder.typicode.com`;
  constructor(
    private httpClient:HttpClient,
    private fireStoreService:AngularFirestore,
  ) {
    this.postCollection = fireStoreService.collection<Post>('post-data');
  }

  create(id:any,userId:any,title:any,body:any):Observable<any>{
    let posts = new Post(id, userId, title, body);
    this.createFireData(posts);
    return this.httpClient.post<any>(this.baseURL+'/posts',{
      id:id,
      userId:userId,
      title:title,
      body:body
    });
  }
  createFireData(post:Post){
    const postData ={...post}
    this.fireStoreService.collection('post-data').add(postData).then(
      response =>{
        console.log(response)
      },error =>{
        console.log(error)
      }
    )
  }

  public find(id:any):Observable<any>{
    const n = this.findFireData(id);
    console.log(n);
    this.findFireData(id).pipe(
      map((fireResponse:any) =>{
        if(fireResponse){
          console.log(fireResponse.title);
        }else {
          console.log('false')
        }
    }
    ))
    return this.httpClient.get<Post>(this.baseURL+`/posts?id=`+id);
  }

  findFireData(id:any):Observable<any>{
    console.log(this.postCollection.doc<Post>('id').valueChanges());
    return this.fireStoreService.collection('post-data').doc<Post>(id).valueChanges();
  }
  findAll():Observable<any>{
    return this.httpClient.get<any>(this.baseURL+`/posts`);
  }
  findAllFireData(){
    return this.fireStoreService.collection('post-data').snapshotChanges();
  }


  updateFireData(post:Post){
    this.fireStoreService.collection('post-data').doc(post.id).update({
      userId:post.userId,
      title:post.title,
      body:post.body
    })
    this.fireStoreService.collection('post-data').add(post).then(
      response =>{
        console.log(response)
      },error =>{
        console.log(error)
      }
    )
  }
  update(id:any,userId:any,title:any,body:any):Observable<any>{
    return this.httpClient.put<any>(this.baseURL+`/posts/`+id,{
      id:id,
      userId:userId,
      title:title,
      body:body
    });
  }
  delete(id:any):Observable<any>{
    return this.httpClient.delete<any>(this.baseURL+`/posts/` + id);
  }
  deleteFireData(id:any){
    return this.fireStoreService.collection('post-data').doc(id).delete();
  }
}
