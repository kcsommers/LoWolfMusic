import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { albums, HtmlMetaService, BasePage } from '@lo/core';
import { AlbumModel } from '@lo/core';

@Component({
  selector: 'lo-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumPageComponent extends BasePage implements OnInit {

  public album: AlbumModel;

  constructor(private _route: ActivatedRoute, private __metaService: HtmlMetaService) {
    super(__metaService, {
      title: 'Lo Wolf Music / Album',
      description: 'Album | Lo Wolf'
    });
    this._route.params
      .pipe(take(1))
      .subscribe((params: { id: string }) => {
        if (params && params.id) {
          const album = albums.find(a => a.id === params.id);
          if (album) {
            this.album = album;
            this.updateMeta(
              {
                title: `Lo Wolf Music / ${album.title}`,
                description: `${album.title} | Lo Wolf`
              }
            );
          }
        }
      });
  }

  ngOnInit() {
    window.scrollTo({ top: 0 });
  }

}
