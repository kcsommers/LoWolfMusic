import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageRoutingModule } from './blog-page-routing.module';
import { BlogPageComponent } from './blog-page.component';
import { SpinnerComponentModule } from '@lo/components';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [BlogPageComponent],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    SpinnerComponentModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [BlogPageComponent]
})
export class BlogPageModule { }
