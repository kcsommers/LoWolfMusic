import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, TemplateRef } from '@angular/core';
import { reviews } from '../../../fake-data';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { VideoComponent } from '@lo/widgets';

@Component({
  selector: 'lo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  public reviews = reviews

  public iframeSrcs = [
    'https://www.youtube.com/embed/Spn0v-EiR_Q',
    'https://www.youtube.com/embed/V_YSgDzoWOo',
    'https://www.youtube.com/embed/PrG4ET1V9U',
    'https://www.youtube.com/embed/onL9YComGes'
  ]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
