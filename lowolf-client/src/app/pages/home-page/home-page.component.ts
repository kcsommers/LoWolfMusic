import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, HostListener } from '@angular/core';
import { reviews, albums } from '../../../fake-data';
import { videoUrls } from '@lo/core';
import { AlbumPopupComponent } from '../../components/album-popup/album-popup.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'lo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  public reviews = reviews;

  public videoUrls = videoUrls;

  public albums = albums;

  @ViewChild('PopupContainer', { static: true, read: ViewContainerRef })
  private _popupContainer: ViewContainerRef;

  constructor(private _cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    if (!localStorage.getItem(AlbumPopupComponent.POPUP_KEY)) {
      localStorage.setItem(AlbumPopupComponent.POPUP_KEY, 'true');
      const albumPopupFactory = this._cfr.resolveComponentFactory(AlbumPopupComponent);
      const albumPopupRef = this._popupContainer.createComponent(albumPopupFactory);
      console.log('hmmm', albumPopupRef)
      albumPopupRef.instance.isOpenChange
        .pipe(take(1))
        .subscribe(isOpen => this.closeAlbumPopup());
    }
  }

  ngAfterViewInit() {
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
