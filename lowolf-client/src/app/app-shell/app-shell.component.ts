import { Component } from '@angular/core';

@Component({
  selector: 'lo-app-shell',
  styleUrls: ['./app-shell.component.scss'],
  template: `
    <lo-header></lo-header>
    <main class="app-main-wrap">
      <router-outlet></router-outlet>
    </main>
    <lo-footer></lo-footer>
  `,
})
export class AppShellComponent {
}
