import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [VideoComponent]
})
export class VideoComponentModule { }
