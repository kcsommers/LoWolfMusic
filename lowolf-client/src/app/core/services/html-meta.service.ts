import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HtmlMetaService {

  constructor(
    @Inject(DOCUMENT) private _dom: Document,
    private _title: Title,
    private _meta: Meta
  ) {
  }

  public setTitle(title: string): void {
    this._title.setTitle(title);
  }

  public setDescription(descr: string): void {
    this._meta.updateTag({
      name: 'description',
      content: descr
    });
  }

  public createCanonicalLink() {
    const link: HTMLLinkElement = this._dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', this._dom.URL);
    this._dom.head.appendChild(link);
  }

}
