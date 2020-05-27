import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { take, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { InstagramImage, InstagramResponse, InstagramFeedService } from './instagram-feed-service';

@Component({
  selector: 'lo-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstagramFeedComponent implements OnInit, OnDestroy {

  public images$ = new BehaviorSubject<InstagramImage[]>(null);

  private _unsubscribe = new Subject();

  constructor(public instagramService: InstagramFeedService) { }

  ngOnInit() {
    this.instagramService.images$
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(imgs => this.images$.next(imgs.slice(0, 8)));
  }

  ngOnDestroy() {
    this._unsubscribe.next(false);
    this._unsubscribe.complete();
  }

}
