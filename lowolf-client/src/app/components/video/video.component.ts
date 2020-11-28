import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef } from '@angular/core';
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
  public autoplay = false;

  @Input()
  public useBorder = false;

  @Input()
  public useIframe = false;

  @ViewChild('Video', { static: false })
  private videoEl: ElementRef;

  public safeSrc: SafeResourceUrl;

  public videoPlaying = false;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }

  public togglePlay(): void {

    this.videoPlaying = !this.videoPlaying;

    if (this.videoPlaying) {
      this.videoEl.nativeElement.play();
    }
    else {
      this.videoEl.nativeElement.pause();
    }

  }

}
