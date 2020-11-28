import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { GalleryPageComponent } from './gallery-page.component';
import { ImageComponentModule, SpinnerComponentModule } from '@lo/components';


@NgModule({
  declarations: [GalleryPageComponent],
  imports: [
    CommonModule,
    GalleryPageRoutingModule,
    SpinnerComponentModule,
    ImageComponentModule
  ],
  exports: [GalleryPageComponent]
})
export class GalleryPageModule { }
