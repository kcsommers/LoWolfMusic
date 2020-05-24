import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, CarouselItemComponent } from './carousel.component';

@NgModule({
  declarations: [CarouselComponent, CarouselItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CarouselComponent, CarouselItemComponent],
  entryComponents: [CarouselItemComponent]
})
export class CarouselComponentModule { }
