import { Component, OnInit, AfterViewInit } from '@angular/core';
import { reviews, albums } from '../../../fake-data';
import { videoUrls } from '@lo/core';

@Component({
  selector: 'lo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  public reviews = reviews;

  public videoUrls = videoUrls;

  public albums = albums;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
