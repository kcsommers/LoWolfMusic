import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicPageComponent } from './music-page.component';


const routes: Routes = [
  {
    path: '',
    component: MusicPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicPageRoutingModule { }
