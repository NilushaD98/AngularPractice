import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {OrderComponent} from "./components/order/order.component";
import {CustomerComponent} from "./components/customer/customer.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {NewComponent} from "./components/new/new.component";
import {DeleteComponent} from "./components/delete/delete.component";
import {GetComponent} from "./components/order/inner-items/get/get.component";
import {AuthGuard} from "./modules/shared/guards/auth.guard";
import {AppComponent} from "./app.component";
import {AllComponent} from "./components/all/all.component";
import {FindComponent} from "./components/find/find.component";
import {UpdateComponent} from "./components/update/update.component";

const routes: Routes = [
  // {path:'',redirectTo:"/home",pathMatch:'full'},
  // {path:'home',component:HomeComponent},
  // {
  //   path:'order',component:OrderComponent, children:[
  //     {path:'',redirectTo:'/order/delete',pathMatch:'full'},
  //     {path:'new',component:NewComponent},
  //     {path:'delete',component:DeleteComponent},
  //     {path:'get',component:GetComponent},]
  // },
  // {path:'customer/:data',component:CustomerComponent},
  // {path:'customer',component:CustomerComponent},
  // {path:'',redirectTo:'/starter',pathMatch:'full'},
  // { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) },
  // { path: 'starter', loadChildren: () => import('./modules/starter/starter.module').then(m => m.StarterModule) },
  // { path: 'console',
  //   loadChildren: () => import('./modules/console/console.module').then(m => m.ConsoleModule),canActivate:[AuthGuard] },
  // { path: 'shared', loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule) },
  {path:'all',component:AllComponent},
  {path:'',redirectTo:"/all",pathMatch:'full'},
  {path:'new',component:NewComponent},
  {path:'find',component:FindComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
