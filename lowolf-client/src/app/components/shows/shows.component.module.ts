import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsComponent } from './shows.component';
import { SpinnerComponentModule } from '../spinner/spinner.component.module';

@NgModule({
  declarations: [ShowsComponent],
  imports: [
    CommonModule,
    SpinnerComponentModule
  ],
  exports: [ShowsComponent]
})
export class ShowsComponentModule { }
