import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

export interface InstagramImage {
  id: string;
  username: string;
  media_url: string;
  permalink: string;
  caption: string;
}

export interface InstagramResponse {
  data: InstagramImage[];
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class InstagramFeedService implements OnDestroy {

  private _imageCache = [];

  private _images$ = new ReplaySubject<InstagramImage[]>(null);

  public error$ = new BehaviorSubject(false);

  private _refreshInterval: number;

  public get images$(): ReplaySubject<InstagramImage[]> {
    if (!this._imageCache.length) {
      this.getImages();
    }
    return this._images$;
  }

  constructor(private _http: HttpClient) {
    this._refreshInterval = window.setInterval(this.getImages.bind(this), 600000);
  }

  ngOnDestroy() {
    window.clearInterval(this._refreshInterval);
  }

  private getImages() {
    this._http.get<InstagramResponse>(`${environment.apiUrl}/instagram`)
      .pipe(take(1))
      .subscribe(
        (res: InstagramResponse) => {
          this._images$.next(res.data);
          this._imageCache = res.data;
        },
        err => {
          if (!this._imageCache.length) {
            this.error$.next(true);
          }
        }
      );
  }
}
