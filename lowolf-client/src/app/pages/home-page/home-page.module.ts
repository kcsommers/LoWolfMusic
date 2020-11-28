import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageComponentModule, InstagramFeedComponentModule, VideoComponentModule, ModalAlbumComponentModule, ModalComponentModule } from '@lo/components';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FontAwesomeModule,
    VideoComponentModule,
    InstagramFeedComponentModule,
    ImageComponentModule,
    ModalAlbumComponentModule,
    ModalComponentModule
  ]
})
export class HomePageModule { }
