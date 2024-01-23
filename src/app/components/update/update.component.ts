import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  searchID='';

  form = new FormGroup(
    {
      id:new FormControl('',[Validators.required,Validators.maxLength(5)]),
      userId:new FormControl('',Validators.required),
      title:new FormControl('',Validators.required),
      body:new FormControl('',Validators.required),
    }
  );
  constructor(
    private httpClient:HttpClient,
    private _snackBar:MatSnackBar,
    private postService:PostService
  ) {
  }
  load(){
    this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts?id=${this.searchID}`).subscribe(
      response =>{
        this.form.patchValue({
          id:response[0].id,
          userId:response[0].userId,
          title:response[0].title,
          body:response[0].body,
        })
      }
    )
  }
  updateData() {
    this.postService.update(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('title')?.value,
      this.form.get('body')?.value
    ).subscribe(
      response =>{
        if(response){
          this._snackBar.open(
            'Data updated','close',{
              duration:1000,
              horizontalPosition:'center',
              verticalPosition:'top'
            }
          );
        }
      }
    )
  }
}
