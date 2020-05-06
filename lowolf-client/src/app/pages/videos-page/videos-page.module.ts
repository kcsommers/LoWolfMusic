import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosPageComponent } from './videos-page.component';
import { VideosPageRoutingModule } from './videos-page-routing.module';

@NgModule({
  declarations: [VideosPageComponent],
  imports: [
    CommonModule,
    VideosPageRoutingModule
  ]
})
export class VideosPageModule { }
