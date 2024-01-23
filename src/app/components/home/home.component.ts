import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name= "nilusha";
  age= 31;
  color='red';
  data:string = '';
  data2: string='';

  printTheDate() {
    console.log(this.data);
  }

  setData(value: string) {
    this.data = value;
  }
}
