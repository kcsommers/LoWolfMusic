import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumPageComponent } from './album-page.component';
import { AlbumPageRoutingModule } from './album-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AlbumPageComponent],
  imports: [
    CommonModule,
    AlbumPageRoutingModule,
    FontAwesomeModule
  ],
  exports: [AlbumPageComponent]
})
export class AlbumPageModule { }
