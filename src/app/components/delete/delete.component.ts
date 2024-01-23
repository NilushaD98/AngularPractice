import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{

  list:Array<any>=[];
  constructor(
    private httpClient:HttpClient,
    private _snackBar:MatSnackBar,
    private postService:PostService
) {
  }
  ngOnInit(): void {
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(
      response =>{
        this.list= response;
      },error => {
        console.log(error.getMessage());
      }
    )
  }

  deleteThis(id:any) {
    this.postService.delete(id).subscribe(
      response => {
        if (response) {
          this._snackBar.open(
            'Data deleted', 'close', {
              duration: 1000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            }
          );
        }
      }
    )
  }
}
