import { NgModule } from '@angular/core';
import { InstagramFeedComponent } from './instagram-feed.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InstagramFeedComponent],
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  exports: [InstagramFeedComponent]
})
export class InstagramFeedComponentModule { }
