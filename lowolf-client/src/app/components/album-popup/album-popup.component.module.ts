import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumPopupComponent } from './album-popup.component';

@NgModule({
  declarations: [AlbumPopupComponent],
  imports: [
    CommonModule
  ],
  exports: [AlbumPopupComponent],
  entryComponents: [AlbumPopupComponent]
})
export class AlbumPopupModule { }
