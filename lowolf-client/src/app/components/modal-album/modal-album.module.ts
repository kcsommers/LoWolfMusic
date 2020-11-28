import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAlbumComponent } from './modal-album.component';
import { ImageComponentModule } from '../image/image.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ModalAlbumComponent],
  imports: [
    CommonModule,
    ImageComponentModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [ModalAlbumComponent]
})
export class ModalAlbumComponentModule { }
