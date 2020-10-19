import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lo-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstagramFeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
