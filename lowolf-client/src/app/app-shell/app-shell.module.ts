import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { InstagramFeedComponentModule } from '../components/instagram-feed/instagram-feed.module';

@NgModule({
  declarations: [
    AppShellComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    InstagramFeedComponentModule
  ],
  exports: [
  ]
})
export class AppShellModule { }
