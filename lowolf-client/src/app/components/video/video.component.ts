import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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

  @Input()
  public poster: string;

  @Input()
  public autoplay: false;

  public safeSrc: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }

}
