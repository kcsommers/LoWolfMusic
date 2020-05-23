import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { videoUrls } from '@lo/core';

@Component({
  selector: 'lo-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosPageComponent implements OnInit {

  public videoUrls = videoUrls;

  constructor() { }

  ngOnInit() {
    window.scrollTo({ top: 0 });
  }

}
