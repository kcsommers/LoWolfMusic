import { Component } from '@angular/core';

@Component({
  selector: 'lo-app-shell',
  template: `
    <lo-header></lo-header>
    <section class="app-main-wrap">
        <router-outlet></router-outlet>
    </section>
    <lo-footer></lo-footer>
  `,
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent {

}

@Component({
  selector: 'lo-app-shell-solid-header',
  template: `
    <lo-header-solid></lo-header-solid>
        <section class="app-main-wrap">
            <router-outlet></router-outlet>
        </section>
    <lo-footer></lo-footer>
  `,
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellSolidHeaderComponent {

}
