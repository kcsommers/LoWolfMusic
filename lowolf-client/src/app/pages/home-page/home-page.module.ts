import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { VideoSliderComponentModule, SignupFormComponentModule, ShowsComponentModule } from '@lo/widgets';
import { AlbumPopupModule } from 'src/app/components/album-popup/album-popup.component.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    VideoSliderComponentModule,
    SignupFormComponentModule,
    ShowsComponentModule,
    AlbumPopupModule
  ]
})
export class HomePageModule { }
