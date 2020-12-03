import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppShellComponent } from './app-shell/app-shell.component';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'music',
        loadChildren: () => import('./pages/music-page/music-page.module').then(m => m.MusicPageModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./pages/gallery-page/gallery-page.module').then(m => m.GalleryPageModule)
      },
      {
        path: 'live',
        loadChildren: () => import('./pages/live-page/live-page.module').then(m => m.LivePageModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./pages/blog-page/blog-page.module').then(m => m.BlogPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
