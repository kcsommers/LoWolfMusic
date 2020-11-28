import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Inject, HostListener, HostBinding, ViewChild, ViewContainerRef, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'lo-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {

  public isOpen = false;

  @ViewChild('VC', { static: false, read: ViewContainerRef })
  private vc: ViewContainerRef;

  @ContentChild('ModalTemplate', { static: false, read: TemplateRef })
  private template: TemplateRef<any>;

  @HostListener('click', ['$event'])
  public clickout(e: MouseEvent): void {

    if (!e.target['classList'].contains('fade-in-quick')) {
      return;
    }

    this.close();
  }

  @HostBinding('class.fade-in-quick')
  public fadeInQuickClass = true;

  @HostBinding('class.open')
  get openClass(): boolean {
    return this.isOpen;
  };

  constructor(@Inject(DOCUMENT) private document: Document, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  public open(): void {
    this.isOpen = true;

    this.vc.createEmbeddedView(this.template);

    this.document.querySelector('html').style.overflow = 'hidden';

    this.cd.markForCheck();
  }

  public close(): void {
    this.isOpen = false;

    this.vc.clear();

    this.document.querySelector('html').style.overflow = 'auto';

    this.cd.markForCheck();
  }

}
