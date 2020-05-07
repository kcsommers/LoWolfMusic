import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPageComponent } from './music-page.component';
import { MusicPageRoutingModule } from './music-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MusicPageComponent],
  imports: [
    CommonModule,
    MusicPageRoutingModule,
    FontAwesomeModule
  ]
})
export class MusicPageModule { }
