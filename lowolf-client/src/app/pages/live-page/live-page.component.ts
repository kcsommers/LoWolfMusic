import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lo-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
