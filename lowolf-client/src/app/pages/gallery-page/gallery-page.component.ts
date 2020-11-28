import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { BasePage, HtmlMetaService } from '@lo/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

interface PhotosResponse {
  data: {
    next_cursor: string;
    resources: any[]
  };
  error: Error;
}

@Component({
  selector: 'lo-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryPageComponent extends BasePage implements OnInit {

  public loading$ = new BehaviorSubject(true);

  public error$ = new BehaviorSubject(false);

  public urls$ = new BehaviorSubject<string[]>([]);

  constructor(
    @Inject('ENVIRONMENT') private environment: any,
    private http: HttpClient,
    private metaService: HtmlMetaService
  ) {
    super(metaService, {
      title: 'Lo Wolf Music / Photos',
      description: 'Images of Lo Wolf | Lo Wolf Music'
    })
  }

  ngOnInit() {
    window.scrollTo({ top: 0 });
    this.getPhotos();
  }

  public getPhotos(): void {

    this.http.get<PhotosResponse>(`${this.environment.apiUrl}/photos`)
      .pipe(take(1))
      .subscribe(
        res => {

          this.loading$.next(false);
          console.log('Res;::: ', res);

          if (!res || !res.data || !res.data.resources || !res.data.resources.length) {
            this.error$.next(true);
            return;
          }

          const currUrls = this.urls$.value;
          const newUrls = res.data.resources.map(p => p.url);
          currUrls.push(...newUrls);

          this.urls$.next(currUrls);

          this.error$.next(false);

        },
        error => {
          this.loading$.next(false);
          console.error(error);
          this.error$.next(true);
        }
      )
  }

}
