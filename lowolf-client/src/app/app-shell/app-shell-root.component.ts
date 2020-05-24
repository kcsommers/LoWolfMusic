import { Component } from '@angular/core';

@Component({
  selector: 'lo-app-shell-root',
  styleUrls: ['./app-shell.component.scss'],
  template: `
    <section class="app-main-wrap">
        <router-outlet></router-outlet>
    </section>
    <lo-footer></lo-footer>
  `
})
export class AppShellRootComponent {
}
