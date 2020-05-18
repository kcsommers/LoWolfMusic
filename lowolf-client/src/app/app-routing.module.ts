import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent, AppShellSolidHeaderComponent } from './app-shell/app-shell.component';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
      }
    ]
  },
  {
    path: '',
    component: AppShellSolidHeaderComponent,
    children: [
      // {
      //   path: 'music',
      //   loadChildren: () => import('./pages/music-page/music-page.module').then(m => m.MusicPageModule)
      // },
      // {
      //   path: 'videos',
      //   loadChildren: () => import('./pages/videos-page/videos-page.module').then(m => m.VideosPageModule)
      // },
      {
        path: '',
        loadChildren: () => import('./pages/page-wrappers/music-video-wrapper/music-video-wrapper.module').then(m => m.MusicVideoWrapperModule)
      },
      {
        path: 'shows',
        loadChildren: () => import('./pages/shows-page/shows-page.module').then(m => m.ShowsPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./pages/about-page/about-page.module').then(m => m.AboutPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
