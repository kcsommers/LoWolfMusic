import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPageComponent } from './music-page.component';
import { MusicPageRoutingModule } from './music-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParallaxBgDirectiveModule } from 'src/app/directives/parallax-bg/parallax-bg.directive.module';

@NgModule({
  declarations: [MusicPageComponent],
  imports: [
    CommonModule,
    MusicPageRoutingModule,
    FontAwesomeModule,
    ParallaxBgDirectiveModule
  ]
})
export class MusicPageModule { }
