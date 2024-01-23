import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  data:string|undefined;
  constructor(
    private activatedRouter:ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(
      response=>{
        this.data = response.get('data')!;
      }
    );
  }



}
