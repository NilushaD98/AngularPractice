import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecurityComponent} from "../security/security.component";
import {StarterComponent} from "./starter.component";
import {StarterHomeContextComponent} from "./components/starter-home-context/starter-home-context.component";
import {PricingComponent} from "./components/pricing/pricing.component";

const routes: Routes = [
  { path: '', component: StarterComponent, children:[
      {path:'',redirectTo:'/starter/home',pathMatch:'full'},
      {path:'home',component:StarterHomeContextComponent},
      {path:'pricing',component:PricingComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
