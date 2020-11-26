import { HostBinding } from '@angular/core';
import { HtmlMetaService } from '../../services/html-meta.service';
import { PageMeta } from './page-meta';

export class BasePage {

  // @HostBinding('class.max-width-container')
  // public maxWidthContainerClass = true;

  constructor(private _metaService: HtmlMetaService, private _pageMeta: PageMeta) {
    this._metaService.setTitle(this._pageMeta.title);
    this._metaService.setDescription(this._pageMeta.description);
    this._metaService.createCanonicalLink();
  }

  public updateMeta(meta: PageMeta) {
    if (meta.title) {
      this._metaService.setTitle(meta.title);
    }
    if (meta.description) {
      this._metaService.setDescription(meta.description);
    }
  }

}
