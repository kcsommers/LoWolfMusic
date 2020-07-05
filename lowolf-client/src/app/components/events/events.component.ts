import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { EventModel, events } from '@lo/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'lo-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent implements OnInit {
  public events$ = new BehaviorSubject<EventModel[]>(null);

  public noEvents$ = new BehaviorSubject(false);

  public loading$ = new BehaviorSubject(true);

  @Output()
  public infoClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.events$.next(events);
    this.loading$.next(false);
  }

}
