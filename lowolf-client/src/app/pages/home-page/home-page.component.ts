import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, HostListener, OnDestroy, ElementRef } from '@angular/core';
import { reviews, albums } from '../../../fake-data';
import { videoUrls } from '@lo/core';
import { AlbumPopupComponent } from '../../components/album-popup/album-popup.component';
import { take, takeUntil, filter } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'lo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {

  public reviews = reviews;

  public videoUrls = videoUrls;

  public albums = albums;

  private _unsubscribe = new Subject();

  @ViewChild('PopupContainer', { static: true, read: ViewContainerRef })
  private _popupContainer: ViewContainerRef;

  @ViewChild('VideosTag', { static: true, read: ElementRef })
  private _videosTag: ElementRef;

  @ViewChild('MusicTag', { static: true, read: ElementRef })
  private _musicTag: ElementRef;

  @ViewChild('ShowsTag', { static: true, read: ElementRef })
  private _showsTag: ElementRef;

  constructor(private _cfr: ComponentFactoryResolver, private _router: Router, private _route: ActivatedRoute) {
    this._router.events
      .pipe(
        takeUntil(this._unsubscribe),
        filter(ev => ev instanceof NavigationEnd)
      )
      .subscribe(() => {
        this._route.fragment
          .subscribe(hash => {
            if (hash === 'videos') {
              this._videosTag.nativeElement.click();
            }
            if (hash === 'music') {
              this._musicTag.nativeElement.click();
            }
            if (hash === 'shows') {
              this._showsTag.nativeElement.click();
            }
          })
      });
  }

  ngOnInit() {

    // if (!localStorage.getItem(AlbumPopupComponent.POPUP_KEY)) {
    //   localStorage.setItem(AlbumPopupComponent.POPUP_KEY, 'true');
    //   const albumPopupFactory = this._cfr.resolveComponentFactory(AlbumPopupComponent);
    //   const albumPopupRef = this._popupContainer.createComponent(albumPopupFactory);
    //   albumPopupRef.instance.isOpenChange
    //     .pipe(take(1))
    //     .subscribe(isOpen => this.closeAlbumPopup());
    // }

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this._unsubscribe.next(false);
    this._unsubscribe.complete();
  }

  public closeAlbumPopup(): void {
    setTimeout(() => {
      this._popupContainer.clear();
    }, 500);
  }

  @HostListener('window:beforeunload')
  public onUnload() {
    localStorage.removeItem(AlbumPopupComponent.POPUP_KEY);
  }

}
