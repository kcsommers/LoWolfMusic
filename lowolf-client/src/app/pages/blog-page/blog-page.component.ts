import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BlogService } from '@lo/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'lo-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPageComponent implements OnInit {

  public posts$ = new BehaviorSubject([]);

  public error$ = new BehaviorSubject(false);

  public loading$ = new BehaviorSubject(true);

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogPosts()
      .pipe(take(1))
      .subscribe(
        res => {

          this.loading$.next(false);
          if (!res) {
            this.error$.next(true);
            return;
          }

          this.posts$.next([...this.posts$.value, ...res]);

        },
        err => {
          console.error(err);
          this.error$.next(true);
          this.loading$.next(false);
        }
      );
  }

}
