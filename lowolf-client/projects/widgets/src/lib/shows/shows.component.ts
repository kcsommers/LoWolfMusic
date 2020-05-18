import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShowModel } from '@lo/core';
import { BehaviorSubject } from 'rxjs';
import { shows } from 'src/fake-data';

@Component({
  selector: 'lo-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowsComponent implements OnInit {
  public shows$ = new BehaviorSubject<ShowModel[]>(null);

  public noShows$ = new BehaviorSubject(false);

  public loading$ = new BehaviorSubject(true);

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.shows$.next(shows);
      this.loading$.next(false);
    }, 2000)
  }

}
