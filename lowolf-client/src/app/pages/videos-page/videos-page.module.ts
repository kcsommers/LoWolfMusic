import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosPageComponent } from './videos-page.component';
import { VideosPageRoutingModule } from './videos-page-routing.module';
import { VideoComponentModule } from '@lo/components';
@NgModule({
  declarations: [VideosPageComponent],
  imports: [
    CommonModule,
    VideosPageRoutingModule,
    VideoComponentModule
  ]
})
export class VideosPageModule { }
