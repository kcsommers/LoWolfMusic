import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'lo-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoComponent implements OnInit {

  @Input()
  public src: string;

  public safeSrc: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer, public el: ElementRef) { }

  ngOnInit() {
    console.log('SRC', this.src)
    this.safeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }

}
