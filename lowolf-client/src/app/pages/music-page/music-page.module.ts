import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPageComponent } from './music-page.component';
import { MusicPageRoutingModule } from './music-page-routing.module';

@NgModule({
  declarations: [MusicPageComponent],
  imports: [
    CommonModule,
    MusicPageRoutingModule
  ]
})
export class MusicPageModule { }
