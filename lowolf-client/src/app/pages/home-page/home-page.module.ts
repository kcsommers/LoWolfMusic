import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { VideoSliderComponentModule, SignupFormComponentModule, ShowsComponentModule } from '@lo/widgets';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    VideoSliderComponentModule,
    SignupFormComponentModule,
    ShowsComponentModule
  ]
})
export class HomePageModule { }
