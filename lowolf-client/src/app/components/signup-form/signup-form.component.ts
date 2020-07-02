import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ContactService } from '@lo/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'lo-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupFormComponent implements OnInit {

  public name = '';

  public email = '';

  public invalid$ = new BehaviorSubject(false);

  public loading$ = new BehaviorSubject(false);

  public success$ = new BehaviorSubject(false);

  public error$ = new BehaviorSubject(false);

  constructor(private _contactService: ContactService) { }

  ngOnInit() {
  }

  private validate(): boolean {
    const isValid = !!(this.name && this.email);
    this.invalid$.next(!isValid);
    return isValid;
  }

  public signup(): void {
    this.error$.next(false);
    if (this.validate()) {
      this.loading$.next(true);
      this._contactService.signup({ name: this.name, email: this.email })
        .pipe(take(1))
        .subscribe(
          res => {
            console.log('res:::: ', res)
            this.name = '';
            this.email = '';
            this.loading$.next(false);
            this.success$.next(true);
          },
          error => {
            console.log('Errr:::: ', error)
            this.loading$.next(false);
            this.error$.next(true);
            this.success$.next(false);
          }
        );
    }
  }

}
