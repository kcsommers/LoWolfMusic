import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { videoUrls, HtmlMetaService, BasePage } from '@lo/core';

@Component({
  selector: 'lo-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosPageComponent extends BasePage implements OnInit {

  public videoUrls = videoUrls;

  constructor(private __metaService: HtmlMetaService) {
    super(__metaService, {
      title: 'Lo Wolf Music / Videos',
      description: 'Videos of Lo Wolf | Lo Wolf Music'
    })
  }

  ngOnInit() {
    window.scrollTo({ top: 0 });
  }

}
