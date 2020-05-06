import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MusicPageComponent } from './music-page.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: MusicPageComponent
    }
  ])],
  exports: [RouterModule]
})
export class MusicPageRoutingModule { }
