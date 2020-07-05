import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { SpinnerComponentModule } from '../spinner/spinner.component.module';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    SpinnerComponentModule
  ],
  exports: [EventsComponent]
})
export class EventsComponentModule { }
