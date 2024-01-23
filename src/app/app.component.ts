import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  title = 'APP';
  typedData: string | undefined;
  constructor(
    private router:Router
  ) {
  }
  @Input() inputValue: string = ``;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['inputValue']);
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
