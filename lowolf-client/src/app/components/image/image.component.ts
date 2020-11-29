import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'lo-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animate('300ms ease'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit, AfterViewInit {

  @Input()
  public src: string;

  @Input()
  public alt: string;

  @Input()
  public showSpinner = true;

  @Input()
  public isGallery = false;

  public safeSrc: SafeResourceUrl;

  public loaded$ = new BehaviorSubject(false);

  @ViewChild('GalleryImg', { static: false, read: ElementRef })
  private galleryImg: ElementRef<HTMLDivElement>;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }

  ngAfterViewInit() {
    if (this.isGallery) {
      const img = new Image();
      img.onload = () => {
        console.log('Loaded:::: ');
        // this.galleryImg.nativeElement.style.backgroundImage = `url(${this.src})`;
        this.loaded$.next(true);
      };
      img.src = this.src;
    }
  }

  public onLoad(): void {
    this.loaded$.next(true);
  }

}
