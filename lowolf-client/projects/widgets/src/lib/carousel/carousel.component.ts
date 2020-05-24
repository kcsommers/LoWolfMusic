import { Component, OnInit, ChangeDetectionStrategy, Input, ContentChildren, QueryList, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'lo-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit, AfterContentInit {

  @ContentChildren('CarouselItem')
  public items: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('items', this.items)
  }

}
