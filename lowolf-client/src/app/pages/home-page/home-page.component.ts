import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distanceToTop } from '@lo/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'lo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  private _unsubscribe = new Subject();

  private _onHomePage = false;

  @ViewChild('PopupContainer', { static: true, read: ViewContainerRef })
  private _popupContainer: ViewContainerRef;

  constructor(private _cfr: ComponentFactoryResolver, private _router: Router, private _route: ActivatedRoute) {
    this._router.events
      .pipe(
        takeUntil(this._unsubscribe),
        filter(ev => ev instanceof NavigationEnd)
      )
      .subscribe((e) => {
        this._route.fragment
          .subscribe(hash => {
            if (!hash) {
              window.scrollTo({ top: 0, left: 0, behavior: this._onHomePage ? 'smooth' : 'auto' });
              return;
            }
            const scrollMark = document.querySelector(`#${hash}`);
            if (scrollMark) {
              if (hash === 'events') {
                setTimeout(() => {
                  const toTop = distanceToTop(scrollMark);
                  window.scrollBy({ top: toTop, left: 0, behavior: this._onHomePage ? 'smooth' : 'auto' });
                  this._onHomePage = true;
                });
              } else {
                const toTop = distanceToTop(scrollMark);
                window.scrollBy({ top: toTop, left: 0, behavior: this._onHomePage ? 'smooth' : 'auto' });
                this._onHomePage = true;
              }
            }

          });
      });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this._unsubscribe.next(false);
    this._unsubscribe.complete();
  }
}

