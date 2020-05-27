import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'lo-app-shell-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppShellRootComponent {
}
