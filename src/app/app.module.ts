import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {NewComponent} from "./components/new/new.component";
import { DeleteComponent } from './components/delete/delete.component';
import { GetComponent } from './components/order/inner-items/get/get.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CookieService} from "ngx-cookie-service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllComponent } from './components/all/all.component';
import { FindComponent } from './components/find/find.component';
import { UpdateComponent } from './components/update/update.component';
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import { LoadingComponent } from './components/loading/loading.component';
import {MatProgressSpinnerModule, MatSpinner} from "@angular/material/progress-spinner";
import {HttpManagerInterceptor} from "./components/interceptors/http-manager.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    OrderComponent,
    NotFoundComponent,
    NewComponent,
    DeleteComponent,
    GetComponent,
    AllComponent,
    FindComponent,
    UpdateComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressSpinnerModule
  ],
  providers: [
    CookieService,
    {provide:HTTP_INTERCEPTORS,useClass:HttpManagerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
