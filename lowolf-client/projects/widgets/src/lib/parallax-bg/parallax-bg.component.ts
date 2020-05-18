import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'lo-parallax-bg',
  templateUrl: './parallax-bg.component.html',
  styleUrls: ['./parallax-bg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParallaxBgComponent implements OnInit {

  @Input()
  public src: string;

  private _pageHeight: number;

  constructor() { }

  ngOnInit() {

  }

}
