import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, HostListener } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { InstagramImage, InstagramFeedService } from './instagram-feed-service';

@Component({
  selector: 'lo-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstagramFeedComponent implements OnInit, OnDestroy {

  public images$ = new BehaviorSubject<InstagramImage[]>(null);

  private _unsubscribe = new Subject();

  public indexLimit = 8;

  constructor(public instagramService: InstagramFeedService) { }

  ngOnInit() {
    this.setIndexLimit();
    this.instagramService.images$
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(imgs => this.images$.next(imgs.slice(0, 8)));
  }

  ngOnDestroy() {
    this._unsubscribe.next(false);
    this._unsubscribe.complete();
  }

  private setIndexLimit(): void {
    if (window.innerWidth >= 812) {
      this.indexLimit = 8;
      return;
    }
    if (window.innerWidth >= 560) {
      this.indexLimit = 6;
      return;
    }
    this.indexLimit = 4;
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.setIndexLimit();
  }

}
