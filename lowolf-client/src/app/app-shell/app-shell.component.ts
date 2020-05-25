import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'lo-app-shell',
  styleUrls: ['./app-shell.component.scss'],
  template: `
    <lo-header></lo-header>
    <main class="app-main-wrap">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppShellComponent {
}

@Component({
  selector: 'lo-app-shell-solid-header',
  styleUrls: ['./app-shell.component.scss'],
  template: `
    <lo-header-solid></lo-header-solid>
    <main class="app-main-wrap">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppShellSolidHeaderComponent {
}
