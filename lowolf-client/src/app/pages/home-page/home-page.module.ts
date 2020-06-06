import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { VideoSliderComponentModule, SignupFormComponentModule, ShowsComponentModule, SocialNavModule } from '@lo/widgets';
import { AlbumPopupModule } from '../../components/album-popup/album-popup.component.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    VideoSliderComponentModule,
    SignupFormComponentModule,
    ShowsComponentModule,
    AlbumPopupModule,
    SocialNavModule
  ]
})
export class HomePageModule { }
