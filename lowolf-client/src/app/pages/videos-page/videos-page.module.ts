import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosPageComponent } from './videos-page.component';
import { VideosPageRoutingModule } from './videos-page-routing.module';
import { VideoComponentModule } from '@lo/widgets';
import { ParallaxBgDirectiveModule } from 'src/app/directives/parallax-bg/parallax-bg.directive.module';

@NgModule({
  declarations: [VideosPageComponent],
  imports: [
    CommonModule,
    VideosPageRoutingModule,
    VideoComponentModule,
    ParallaxBgDirectiveModule
  ]
})
export class VideosPageModule { }
