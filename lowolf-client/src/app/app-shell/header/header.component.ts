import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'lo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public headerSolid$ = new BehaviorSubject(false);

  @HostListener('window:scroll')
  public onScroll() {
    if (window.scrollY > 50 && !this.headerSolid$.value) {
      this.headerSolid$.next(true)
    }
    if (window.scrollY <= 50 && this.headerSolid$.value) {
      this.headerSolid$.next(false);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
