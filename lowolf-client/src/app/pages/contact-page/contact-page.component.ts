import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lo-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({ top: 0 });
  }

}
