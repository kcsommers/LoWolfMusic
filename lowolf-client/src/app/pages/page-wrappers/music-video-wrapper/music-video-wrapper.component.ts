import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lo-music-video-wrapper',
  template: `
      <lo-parallax-bg [src]="'assets/images/tusk1-2.jpg'"></lo-parallax-bg>
      <div class="page-wrap">
        <router-outlet></router-outlet>
      </div>
  `,
  styleUrls: ['./music-video-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicVideoWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
