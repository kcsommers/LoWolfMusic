import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lo-social-nav',
  templateUrl: './social-nav.component.html',
  styleUrls: ['./social-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}