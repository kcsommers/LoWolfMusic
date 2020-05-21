import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumPageComponent } from './album-page.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: AlbumPageComponent
    }
  ])],
  exports: [RouterModule]
})
export class AlbumPageRoutingModule { }
