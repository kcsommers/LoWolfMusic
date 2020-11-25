import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { HtmlMetaService, BasePage } from '@lo/core';

interface PhotosResponse {
  data: {
    next_cursor: string;
    resources: any[]
  };
  error: Error;
}

@Component({
  selector: 'lo-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosPageComponent extends BasePage implements OnInit {

  public loading$ = new BehaviorSubject(true);

  public error$ = new BehaviorSubject(false);

  public urls$ = new BehaviorSubject<string[]>([]);

  constructor(
    @Inject('ENVIRONMENT') private environment: any,
    private _http: HttpClient,
    private __metaService: HtmlMetaService
  ) {
    super(__metaService, {
      title: 'Lo Wolf Music / Photos',
      description: 'Images of Lo Wolf | Lo Wolf Music'
    })
  }

  ngOnInit() {
    window.scrollTo({ top: 0 });
    this.getPhotos();
  }

  public getPhotos(): void {
    this._http.get<PhotosResponse>(`${this.environment.apiUrl}/photos`)
      .pipe(take(1))
      .subscribe(
        res => {
          this.loading$.next(false);
          console.log('Res;::: ', res)
          if (res.data && res.data.resources && res.data.resources.length) {
            const currUrls = this.urls$.value;
            const newUrls = res.data.resources.map(p => p.url);
            currUrls.push(...newUrls);
            this.urls$.next(currUrls);
            this.error$.next(false);
          } else {
            this.error$.next(true);
          }
        },
        error => {
          this.loading$.next(false);
          console.error(error);
          this.error$.next(true);
        }
      )
  }

}
