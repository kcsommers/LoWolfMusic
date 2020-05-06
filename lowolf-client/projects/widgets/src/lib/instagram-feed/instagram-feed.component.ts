import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface InstagramImage {
  id: string;
  username: string;
  media_url: string;
  permalink: string;
  caption: string;
}

interface InstagramResponse {
  data: InstagramImage[];
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  }
}

@Component({
  selector: 'lo-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstagramFeedComponent implements OnInit {

  public images$ = new BehaviorSubject<InstagramImage[]>(null);

  public feedError$ = new BehaviorSubject(false);

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get(`${environment.apiUrl}/instagram`)
      .pipe(take(1))
      .subscribe(
        (res: InstagramResponse) => {
          console.log('RESP', res);
          if (!res || !res.data || !res.data.length) {
            this.feedError$.next(true);
            return;
          }
          this.images$.next(res.data.slice(0, 8))
        },
        err => {
          this.feedError$.next(true);
          console.error(err);
        }
      )

  }

}
