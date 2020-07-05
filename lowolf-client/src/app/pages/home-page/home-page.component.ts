import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, HostListener, OnDestroy, ElementRef } from '@angular/core';
import { reviews, albums, videoUrls, distanceToTop } from '@lo/core';
import { AlbumPopupComponent } from '../../components/album-popup/album-popup.component';
import { take, takeUntil, filter } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'lo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  public reviews = reviews;

  public videoUrls = videoUrls;

  public albums = albums;

  public socialNavVisible = false;

  private _unsubscribe = new Subject();

  private _onHomePage = false;

  public modalOpen = false;

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

    if (!localStorage.getItem(AlbumPopupComponent.POPUP_KEY)) {
      localStorage.setItem(AlbumPopupComponent.POPUP_KEY, 'true');
      const albumPopupFactory = this._cfr.resolveComponentFactory(AlbumPopupComponent);
      document.querySelector('html').classList.add('no-scroll');
      const albumPopupRef = this._popupContainer.createComponent(albumPopupFactory);
      albumPopupRef.instance.isOpenChange
        .pipe(take(1))
        .subscribe(isOpen => this.closeAlbumPopup());
    }

  }

  ngOnDestroy() {
    this._unsubscribe.next(false);
    this._unsubscribe.complete();
  }

  public closeAlbumPopup(): void {
    document.querySelector('html').classList.remove('no-scroll');
    setTimeout(() => {
      this._popupContainer.clear();
    }, 500);
  }

  @HostListener('window:beforeunload')
  public onUnload() {
    localStorage.removeItem(AlbumPopupComponent.POPUP_KEY);
  }

  @HostListener('window:scroll')
  public onScroll() {
    if (window.scrollY > 200) {
      if (!this.socialNavVisible) {
        this.socialNavVisible = true;
      }
    } else {
      this.socialNavVisible = false;
    }
  }
}

