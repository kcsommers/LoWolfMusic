import { Component, ChangeDetectionStrategy, HostListener, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'lo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  public headerSolid$ = new BehaviorSubject(false);

  public mobileNavOpen = false;

  @HostListener('window:scroll')
  public onScroll() {
    if (window.scrollY > 50 && !this.headerSolid$.value) {
      this.headerSolid$.next(true)
    }
    if (window.scrollY <= 50 && this.headerSolid$.value) {
      this.headerSolid$.next(false);
    }
  }

}

@Component({
  selector: 'lo-header-solid',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderSolidComponent {
  public headerSolid$ = new BehaviorSubject(true);
}

