import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShowModel, shows } from '@lo/core';
import { BehaviorSubject } from 'rxjs';

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

  public modalOpen = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.shows$.next(shows);
      this.loading$.next(false);
    }, 2000)
  }

  public infoModal(): void {

  }

}
