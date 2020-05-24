import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { reviews } from '../../../fake-data';

@Component({
  selector: 'lo-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent implements OnInit {

  public reviews = reviews;

  constructor() { }

  ngOnInit() {
    window.scrollTo({ top: 0 });
  }

}
