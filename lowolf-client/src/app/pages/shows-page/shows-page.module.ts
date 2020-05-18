import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsPageComponent } from './shows-page.component';
import { ShowsPageRoutingModule } from './shows-page-routing.module';
import { ParallaxBgComponentModule, ShowsComponentModule } from '@lo/widgets';

@NgModule({
  declarations: [ShowsPageComponent],
  imports: [
    CommonModule,
    ShowsPageRoutingModule,
    ParallaxBgComponentModule,
    ShowsComponentModule
  ]
})
export class ShowsPageModule { }
