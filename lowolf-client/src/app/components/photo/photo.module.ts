import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { SpinnerComponentModule } from '../spinner/spinner.component.module';



@NgModule({
  declarations: [PhotoComponent],
  imports: [
    CommonModule,
    SpinnerComponentModule
  ],
  exports: [PhotoComponent]
})
export class PhotoModule { }
