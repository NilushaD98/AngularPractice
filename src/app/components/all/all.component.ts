import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit{

  list:Array<any>=[];
  constructor(
    private httpClient:HttpClient,
    private postService:PostService) {
  }
  ngOnInit(): void {
    this.postService.findAll().subscribe(
      response =>{
        this.list= response;
      },error => {
        console.log(error.getMessage());
      }
    )
  }
}
