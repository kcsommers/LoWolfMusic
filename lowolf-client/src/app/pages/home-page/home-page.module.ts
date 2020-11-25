import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InstagramFeedComponentModule, NavComponentModule, SocialNavComponentModule, VideoComponentModule } from '@lo/components';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FontAwesomeModule,
    NavComponentModule,
    SocialNavComponentModule,
    VideoComponentModule,
    InstagramFeedComponentModule
  ]
})
export class HomePageModule { }
