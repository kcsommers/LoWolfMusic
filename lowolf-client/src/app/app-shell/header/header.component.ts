import { Component, ChangeDetectionStrategy, HostListener, Input, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface NavItem {
  name: string;
  link?: string;
  fragment?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    name: 'Music',
    link: '/',
    fragment: 'music'
  },
  {
    name: 'Media',
    children: [
      {
        name: 'Videos',
        link: '/videos'
      },
      {
        name: 'Photos',
        link: '/photos'
      }
    ]
  },
  {
    name: 'Events',
    link: '/',
    fragment: 'events'
  },
  {
    name: 'About',
    children: [
      {
        name: 'Bio',
        link: '/about'
      },
      {
        name: 'Press',
        link: '/about',
        fragment: 'press'
      }
    ]
  },
  {
    name: 'Contact',
    link: '/contact'
  }
];

class BaseHeader {

  public mobileNavOpen = false;

  public headerSolid$ = new BehaviorSubject(false);

  public navItems = navItems;

  public openChildNav(event: MouseEvent): void {
    this.closeChildNav();
    event.stopPropagation();
    event.target['classList'].add('child-nav-open');
    document.addEventListener('click', this.onClick.bind(this));
  }

  private onClick(e: MouseEvent): void {
    this.closeChildNav();
  }

  public closeChildNav(): void {
    const open = document.querySelector('.child-nav-open');
    if (open) {
      open.classList.remove('child-nav-open');
    }
    document.removeEventListener('click', this.onClick.bind(this));
  }
}

@Component({
  selector: 'lo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends BaseHeader {

  @HostListener('window:scroll')
  public onScroll() {
    if (window.scrollY > 50 && !this.headerSolid$.value) {
      this.headerSolid$.next(true);
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
export class HeaderSolidComponent extends BaseHeader implements OnInit {

  ngOnInit() {
    this.headerSolid$.next(true);
  }

}

