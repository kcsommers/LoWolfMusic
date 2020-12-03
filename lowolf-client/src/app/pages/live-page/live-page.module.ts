import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivePageRoutingModule } from './live-page-routing.module';
import { LivePageComponent } from './live-page.component';


@NgModule({
  declarations: [LivePageComponent],
  imports: [
    CommonModule,
    LivePageRoutingModule
  ],
  exports: [LivePageComponent]
})
export class LivePageModule { }
