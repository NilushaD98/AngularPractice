import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email='';
  password='';

  constructor(
    private router:Router,
    private authService:AuthService,
    private title:Title
    ) {
  }
  ngOnInit(): void {
    this.title.setTitle('Security | Login')
    if(this.authService.isExistToken('myToken')){
      this.router.navigateByUrl('/console');
    }
  }
  login(){
    if(this.email === 'n@gmail.com' && this.password==='1234'){
      this.authService.createToken(this.email);
      this.router.navigateByUrl('/console');
    }else {
      alert('username password incorrect');
    }
  }


}
