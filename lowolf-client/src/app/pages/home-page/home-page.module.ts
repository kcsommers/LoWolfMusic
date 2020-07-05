import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { VideoSliderComponentModule, SignupFormComponentModule, EventsComponentModule, SocialNavModule } from '@lo/components';
import { AlbumPopupModule } from '../../components/album-popup/album-popup.component.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    VideoSliderComponentModule,
    SignupFormComponentModule,
    EventsComponentModule,
    AlbumPopupModule,
    SocialNavModule
  ]
})
export class HomePageModule { }
