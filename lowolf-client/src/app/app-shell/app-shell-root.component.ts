import { Component } from '@angular/core';

@Component({
  selector: 'lo-app-shell-root',
  styleUrls: ['./app-shell-root.component.scss'],
  template: `
    <router-outlet></router-outlet>
    <lo-footer></lo-footer>
  `
})
export class AppShellRootComponent {
}
