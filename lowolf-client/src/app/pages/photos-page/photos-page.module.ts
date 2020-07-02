import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosPageRoutingModule } from './photos-page-routing.module';
import { PhotosPageComponent } from './photos-page.component';
import { PhotoModule, SpinnerComponentModule } from '@lo/components';


@NgModule({
  declarations: [PhotosPageComponent],
  imports: [
    CommonModule,
    PhotosPageRoutingModule,
    PhotoModule,
    SpinnerComponentModule
  ],
  exports: [PhotosPageComponent]
})
export class PhotosPageModule { }
