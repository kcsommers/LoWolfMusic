import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoSliderComponent } from './video-slider.component';
import { VideoComponentModule } from '../video/video.component.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [VideoSliderComponent],
  imports: [
    CommonModule,
    VideoComponentModule,
    FontAwesomeModule
  ],
  exports: [VideoSliderComponent]
})
export class VideoSliderComponentModule { }
