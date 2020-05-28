import { NgModule } from '@angular/core';
import { InstagramFeedComponent } from './instagram-feed.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponentModule } from '../spinner/spinner.component.module';

@NgModule({
  declarations: [InstagramFeedComponent],
  imports: [
    CommonModule,
    SpinnerComponentModule
  ],
  exports: [InstagramFeedComponent]
})
export class InstagramFeedComponentModule { }
