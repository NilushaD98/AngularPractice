import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {
  searchID='';

  list:Array<any>=[];
  constructor(
    private httpClient:HttpClient,
    private postService:PostService
  ) {
  }
  load(){
    this.postService.find(this.searchID).subscribe(
      response =>{
        this.list = response
      }
    )
  }
}
