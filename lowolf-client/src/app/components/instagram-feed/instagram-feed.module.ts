import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramFeedComponent } from './instagram-feed.component';
import { SpinnerComponentModule } from '../spinner/spinner.module';



@NgModule({
  declarations: [InstagramFeedComponent],
  imports: [
    CommonModule,
    SpinnerComponentModule
  ],
  exports: [InstagramFeedComponent]
})
export class InstagramFeedComponentModule { }
