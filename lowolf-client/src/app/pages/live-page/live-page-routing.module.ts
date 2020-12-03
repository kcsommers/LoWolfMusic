import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivePageComponent } from './live-page.component';


const routes: Routes = [
  {
    path: '',
    component: LivePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivePageRoutingModule { }
