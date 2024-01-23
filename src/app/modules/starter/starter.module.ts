import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './components/starter-header/starter-header.component';
import { StarterFooterComponent } from './components/starter-footer/starter-footer.component';
import { MainSliderComponent } from './components/starter-home-context/inner-items/main-slider/main-slider.component';
import { MainServicesComponent } from './components/starter-home-context/inner-items/main-services/main-services.component';
import { StarterHomeContextComponent } from './components/starter-home-context/starter-home-context.component';
import { PricingComponent } from './components/pricing/pricing.component';


@NgModule({
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterFooterComponent,
    MainSliderComponent,
    MainServicesComponent,
    StarterHomeContextComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }
