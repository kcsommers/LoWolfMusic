import { Component } from '@angular/core';

@Component({
  selector: 'lo-app-shell',
  template: `
    <lo-header></lo-header>
    <router-outlet></router-outlet>
  `,
})
export class AppShellComponent {

}

@Component({
  selector: 'lo-app-shell-solid-header',
  template: `
    <lo-header-solid></lo-header-solid>
    <router-outlet></router-outlet>
  `,
})
export class AppShellSolidHeaderComponent {

}
