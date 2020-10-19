import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramFeedComponent } from './instagram-feed.component';



@NgModule({
  declarations: [InstagramFeedComponent],
  imports: [
    CommonModule
  ],
  exports: [InstagramFeedComponent]
})
export class InstagramFeedComponentModule { }
