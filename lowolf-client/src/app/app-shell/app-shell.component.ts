import { Component } from '@angular/core';

@Component({
  selector: 'lo-app-shell',
  styleUrls: ['./app-shell.component.scss'],
  template: `
    <main class="app-main-wrap">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppShellComponent {
}
