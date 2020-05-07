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
      {
        path: 'music',
        loadChildren: () => import('./pages/music-page/music-page.module').then(m => m.MusicPageModule)
      },
      {
        path: 'videos',
        loadChildren: () => import('./pages/videos-page/videos-page.module').then(m => m.VideosPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
