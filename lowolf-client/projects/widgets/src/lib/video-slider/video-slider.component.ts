import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, Renderer2, ViewRef, AfterViewInit } from '@angular/core';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'lo-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoSliderComponent {

  private _currentIndex = 0;

  private _sliding = false;

  @Input()
  public slides: string[];

  @ViewChild('VideoContainer', { static: false, read: ViewContainerRef })
  private _videoContainer: ViewContainerRef;

  constructor(private _cfr: ComponentFactoryResolver, private _renderer: Renderer2) { }

  public next(): void {
    if (!this._sliding) {
      this._sliding = true;
      this._currentIndex = this._currentIndex === this.slides.length - 1
        ? 0
        : this._currentIndex + 1
      const video = this.createVideo(this.slides[this._currentIndex], 'slide-in-right');
    }

  }

  public prev(): void {
    if (!this._sliding) {
      this._sliding = true;
      this._currentIndex = this._currentIndex === 0
        ? this.slides.length - 1
        : this._currentIndex - 1
      const video = this.createVideo(this.slides[this._currentIndex], 'slide-in-left');
    }
  }

  private createVideo(src: string, className: string) {
    const factory = this._cfr.resolveComponentFactory(VideoComponent);
    const video = this._videoContainer.createComponent(factory);
    video.instance.src = src;
    this._renderer.addClass(video.instance.el.nativeElement, 'slider-video');
    this._renderer.addClass(video.instance.el.nativeElement, className);
    setTimeout(() => {
      this._renderer.removeClass(video.instance.el.nativeElement, className);
      const first = document.querySelector('.first-video');
      if (first) {
        document.querySelector('.video-wrap').removeChild(first);
      } else {
        this._videoContainer.remove(0);
      }
      this._sliding = false;
    }, 700);
  }
}
