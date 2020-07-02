import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'lo-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animate('300ms ease'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent implements OnInit {

  @Input()
  private src: string;

  public loaded$ = new BehaviorSubject(false);

  constructor() { }

  ngOnInit() {
  }

  public onLoad(): void {
    this.loaded$.next(true);
  }

}
