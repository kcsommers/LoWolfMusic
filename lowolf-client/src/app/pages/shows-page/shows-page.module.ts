import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsPageComponent } from './shows-page.component';
import { ShowsPageRoutingModule } from './shows-page-routing.module';



@NgModule({
  declarations: [ShowsPageComponent],
  imports: [
    CommonModule,
    ShowsPageRoutingModule
  ]
})
export class ShowsPageModule { }
