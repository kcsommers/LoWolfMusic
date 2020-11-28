import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
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
export class ImageComponent implements OnInit {

  @Input()
  public src: string;

  @Input()
  public alt: string;

  @Input()
  public showSpinner = true;

  public safeSrc: SafeResourceUrl;

  public loaded$ = new BehaviorSubject(false);

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }

  public onLoad(): void {
    this.loaded$.next(true);
  }

}
