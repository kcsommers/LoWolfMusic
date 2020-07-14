import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { reviews, distanceToTop, HtmlMetaService, BasePage } from '@lo/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'lo-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent extends BasePage implements OnInit, OnDestroy {

  public reviews = reviews;

  private _unsubscribe = new Subject();

  private _onPage = false;

  constructor(private _router: Router, private _route: ActivatedRoute, private __metaService: HtmlMetaService) {

    super(__metaService, {
      title: 'Lo Wolf Music / About',
      description: 'Bio and Press | Lo Wolf'
    });

    this._router.events
      .pipe(
        takeUntil(this._unsubscribe),
        filter(ev => ev instanceof NavigationEnd)
      )
      .subscribe((e) => {
        this._route.fragment
          .subscribe(hash => {
            if (!hash) {
              window.scrollTo({ top: 0, left: 0, behavior: this._onPage ? 'smooth' : 'auto' });
              return;
            }
            const scrollMark = document.querySelector(`#${hash}`);
            if (scrollMark) {
              const toTop = distanceToTop(scrollMark);
              window.scrollBy({ top: toTop, left: 0, behavior: this._onPage ? 'smooth' : 'auto' });
            }
          });
      });
  }

  ngOnInit() {
    this._onPage = true;
  }

  ngOnDestroy() {
    this._unsubscribe.next(false);
    this._unsubscribe.complete();
  }

}
