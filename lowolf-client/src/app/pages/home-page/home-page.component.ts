import { Component } from '@angular/core';
import { albums, BasePage, HtmlMetaService } from '@lo/core';


@Component({
  selector: 'lo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BasePage {

  public albums = albums;

  constructor(private metaService: HtmlMetaService) {
    super(metaService, {
      title: 'Lo Wolf Music',
      description: 'New album Singe available now'
    });
  }

}

