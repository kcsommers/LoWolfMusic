import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicPageRoutingModule } from './music-page-routing.module';
import { MusicPageComponent } from './music-page.component';
import { ImageComponentModule, ModalAlbumComponentModule, ModalComponentModule, VideoComponentModule } from '@lo/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [MusicPageComponent],
  imports: [
    CommonModule,
    MusicPageRoutingModule,
    ImageComponentModule,
    FontAwesomeModule,
    VideoComponentModule,
    ModalAlbumComponentModule,
    ModalComponentModule
  ],
  exports: [MusicPageComponent]
})
export class MusicPageModule { }
