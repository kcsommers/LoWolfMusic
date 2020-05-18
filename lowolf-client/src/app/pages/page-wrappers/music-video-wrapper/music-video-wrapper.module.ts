import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicVideoWrapperComponent } from './music-video-wrapper.component';
import { MusicVideoWrapperRoutingModule } from './music-video-wrapper-routing.module';
import { ParallaxBgComponentModule } from '@lo/widgets';

@NgModule({
  declarations: [MusicVideoWrapperComponent],
  imports: [
    CommonModule,
    MusicVideoWrapperRoutingModule,
    ParallaxBgComponentModule
  ]
})
export class MusicVideoWrapperModule { }
