import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNavComponent } from './social-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SocialNavComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [SocialNavComponent]
})
export class SocialNavComponentModule { }
