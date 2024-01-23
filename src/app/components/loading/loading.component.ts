import { Component } from '@angular/core';
import {LoadingService} from "../../services/loading.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {


  constructor(
    private loadingService:LoadingService
  ) {

  }
  show:BehaviorSubject<boolean> = this.loadingService.loading;
}
