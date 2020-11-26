import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InstagramFeedComponentModule, VideoComponentModule } from '@lo/components';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FontAwesomeModule,
    VideoComponentModule,
    InstagramFeedComponentModule
  ]
})
export class HomePageModule { }
