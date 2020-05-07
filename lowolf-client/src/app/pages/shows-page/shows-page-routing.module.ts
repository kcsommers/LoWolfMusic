import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowsPageComponent } from './shows-page.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ShowsPageComponent
    }
  ])],
  exports: [RouterModule]
})
export class ShowsPageRoutingModule { }
