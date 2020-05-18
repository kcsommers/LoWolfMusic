import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MusicVideoWrapperComponent } from './music-video-wrapper.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: MusicVideoWrapperComponent,
      children: [
        {
          path: 'music',
          loadChildren: () => import('../../music-page/music-page.module').then(m => m.MusicPageModule)
        },
        {
          path: 'videos',
          loadChildren: () => import('../../videos-page/videos-page.module').then(m => m.VideosPageModule)
        },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class MusicVideoWrapperRoutingModule { }
