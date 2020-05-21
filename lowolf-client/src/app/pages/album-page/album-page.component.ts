import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { albums } from 'src/fake-data';
import { AlbumModel } from 'projects/core/src/lib/model/music/albums';

@Component({
  selector: 'lo-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumPageComponent implements OnInit {

  public album: AlbumModel;

  constructor(private _route: ActivatedRoute) {
    this._route.params
      .pipe(take(1))
      .subscribe((params: { id: string }) => {
        if (params && params.id) {
          const album = albums.find(a => a.id === params.id);
          if (album) {
            this.album = album;
          }
        }
      });
  }

  ngOnInit() {
  }

}