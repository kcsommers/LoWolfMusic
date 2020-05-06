import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideosPageComponent } from './videos-page.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: VideosPageComponent
    }
  ])],
  exports: [RouterModule]
})
export class VideosPageRoutingModule { }
