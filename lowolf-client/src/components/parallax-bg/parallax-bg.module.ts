import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxBgComponent } from './parallax-bg.component';

@NgModule({
  declarations: [ParallaxBgComponent],
  imports: [
    CommonModule
  ],
  exports: [ParallaxBgComponent]
})
export class ParallaxBgComponentModule { }
