import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNavComponent } from './social-nav.component';



@NgModule({
  declarations: [SocialNavComponent],
  imports: [
    CommonModule
  ],
  exports: [SocialNavComponent]
})
export class SocialNavComponentModule { }
