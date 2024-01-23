import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {LoadingService} from "../../services/loading.service";

@Injectable()
export class HttpManagerInterceptor implements HttpInterceptor {

  constructor(private loadingService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.loading.next(true);
    return next.handle(request).pipe(
      catchError(error =>{
        console.log(error);
        return throwError(error);
      }),
      finalize(() =>{
        this.loadingService.loading.next(false);
        }

      )
    )
  }
}
