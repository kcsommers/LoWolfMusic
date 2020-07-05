import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ContactService } from '@lo/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'lo-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent implements OnInit {

  public name = '';

  public email = '';

  public message = '';

  public invalid$ = new BehaviorSubject(false);

  public loading$ = new BehaviorSubject(false);

  public success$ = new BehaviorSubject(false);

  public error$ = new BehaviorSubject(false);

  @Input()
  public title: string;

  @Input()
  public blurb: string;

  @Input()
  public includeMessage = false;

  @Input()
  public outlineBtn = false;

  @Input()
  public centerBtn = false;

  @Input()
  public useLabels = false;

  constructor(private _contactService: ContactService) { }

  ngOnInit() {
  }

  private validate(): boolean {
    const isValid = !!(
      this.name &&
      this.email &&
      (!this.includeMessage || !!this.message)
    );
    this.invalid$.next(!isValid);
    return isValid;
  }

  public submit(): void {
    this.error$.next(false);
    if (this.validate()) {
      this.loading$.next(true);
      if (this.includeMessage) {
        this.sendMessage();
      } else {
        this.signup();
      }
    }
  }

  public sendMessage(): void {
    this._contactService.sendMessage({ name: this.name, email: this.email, message: this.message })
      .pipe(take(1))
      .subscribe(
        res => {
          console.log('res:::: ', res)
          this.name = '';
          this.email = '';
          this.message = '';
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

  public signup(): void {
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
