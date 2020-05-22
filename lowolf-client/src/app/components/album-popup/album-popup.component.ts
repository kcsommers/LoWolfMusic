import { Component, OnInit, ChangeDetectionStrategy, HostListener, Output, EventEmitter, HostBinding } from '@angular/core';


@Component({
  selector: 'lo-album-popup',
  templateUrl: './album-popup.component.html',
  styleUrls: ['./album-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumPopupComponent implements OnInit {

  public static POPUP_KEY = '__lo_album_popup__';

  @Output()
  public isOpenChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public close(): void {
    this.isHidden = true;
    this.isOpenChange.emit(false);
  }

  @HostBinding('class.hidden')
  public isHidden = false;

  @HostBinding('class.fade-in')
  public fadeIn = true;
}
