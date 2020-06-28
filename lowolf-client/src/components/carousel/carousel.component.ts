import { Component, OnInit, ChangeDetectionStrategy, Input, ContentChildren, QueryList, AfterContentInit, ElementRef, ContentChild, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit, Renderer2, ComponentFactoryResolver, HostBinding, ComponentRef } from '@angular/core';

@Component({
  selector: 'lo-carousel-item',
  template: `
      <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: context }"></ng-container>
  `,
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselItemComponent {
  @Input()
  public itemTemplate: TemplateRef<any>;

  @Input()
  public context: any;

  @HostBinding('class.slide-in-right')
  public slideInRight = true;

  @HostBinding('style.position')
  public position = 'absolute';

  public set isVisible(isVisible: boolean) {
    if (isVisible) {
      this._renderer.addClass(this._el.nativeElement, 'slide-in-right')
      this._renderer.removeClass(this._el.nativeElement, 'slide-out-right');
    } else {
      this._renderer.addClass(this._el.nativeElement, 'slide-out-right')
      this._renderer.removeClass(this._el.nativeElement, 'slide-in-right');
    }
  }

  constructor(private _renderer: Renderer2, private _el: ElementRef) {
  }
}

@Component({
  selector: 'lo-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements AfterViewInit {

  @Input()
  public context: any[];

  @ContentChild('CarouselItemTemplate', { static: false, read: TemplateRef })
  private _projectedTemplate: TemplateRef<any>;

  @ViewChild('CarouselContainer', { static: false, read: ViewContainerRef })
  private _carouselContainer: ViewContainerRef;

  @HostBinding('style.position')
  public position = 'relative';

  private _itemMap = new Map<number, ComponentRef<CarouselItemComponent>>();

  private _currentIndex = 0;

  constructor(private _cfr: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.createItem();
    setInterval(() => {
      this.next();
    }, 5000)
  }

  private next(): void {
    const currentItem = this._itemMap.get(this._currentIndex);
    currentItem.instance.isVisible = false;

    setTimeout(() => {
      this._carouselContainer.detach(0);
    }, 500);

    this._currentIndex = this._currentIndex === this.context.length - 1 ? 0 : this._currentIndex + 1;

    const newItem = this._itemMap.get(this._currentIndex);
    if (newItem) {
      this._carouselContainer.insert(newItem.hostView);
      newItem.instance.isVisible = true;
    } else {
      this.createItem();
    }
  }

  private createItem(): void {
    const itemFactory = this._cfr.resolveComponentFactory(CarouselItemComponent);
    const itemRef = this._carouselContainer.createComponent(itemFactory);
    itemRef.instance.context = this.context[this._currentIndex];
    itemRef.instance.itemTemplate = this._projectedTemplate;
    itemRef.changeDetectorRef.detectChanges();
    this._itemMap.set(this._currentIndex, itemRef);
  }

}
