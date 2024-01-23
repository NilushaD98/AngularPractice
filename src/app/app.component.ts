import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APP';
  typedData: string | undefined;
  constructor(
    private router:Router
  ) {
  }
  navigateToURL(s: string) {
    this.router.navigateByUrl(s).then(
      e=>{
        console.log(e);
      }
    ).catch(
      error=>{
        console.log(error);
        this.router.navigateByUrl('/not-found')
      }
    )
  }
}
