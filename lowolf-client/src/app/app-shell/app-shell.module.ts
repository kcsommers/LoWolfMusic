import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppShellRootComponent } from './app-shell-root.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppShellRootComponent,
    AppShellComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppShellRootComponent
  ]
})
export class AppShellModule { }
