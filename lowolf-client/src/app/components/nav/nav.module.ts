import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [NavComponent]
})
export class NavComponentModule { }
