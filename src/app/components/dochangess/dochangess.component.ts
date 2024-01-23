import {Component, DoCheck, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-dochangess',
  templateUrl: './dochangess.component.html',
  styleUrls: ['./dochangess.component.css']
})
export class DochangessComponent implements DoCheck{
  @Input() inputVal:string='';
  ngDoCheck(): void {
    console.log(this.inputVal)
  }

}
