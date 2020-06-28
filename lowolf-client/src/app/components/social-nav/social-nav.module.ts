import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialNavRoutingModule } from './social-nav-routing.module';
import { SocialNavComponent } from './social-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [SocialNavComponent],
  imports: [
    CommonModule,
    SocialNavRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    SocialNavComponent
  ]
})
export class SocialNavModule { }
