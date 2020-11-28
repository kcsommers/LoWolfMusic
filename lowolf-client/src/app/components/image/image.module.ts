import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { SpinnerComponentModule } from '../spinner/spinner.module';



@NgModule({
  declarations: [ImageComponent],
  imports: [
    CommonModule,
    SpinnerComponentModule
  ],
  exports: [ImageComponent]
})
export class ImageComponentModule { }
