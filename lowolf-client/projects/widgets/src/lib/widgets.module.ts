import { NgModule } from '@angular/core';
import { VideoComponentModule } from './video/video.component.module';
import { VideoSliderComponentModule } from './video-slider/video-slider.component.module';

@NgModule({
  declarations: [],
  imports: [
    VideoComponentModule,
    VideoSliderComponentModule
  ],
  exports: []
})
export class WidgetsModule { }
