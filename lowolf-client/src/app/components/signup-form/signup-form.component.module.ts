import { NgModule } from '@angular/core';
import { SignupFormComponent } from './signup-form.component';
import { SpinnerComponentModule } from '../spinner/spinner.component.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupFormComponent],
  imports: [
    SpinnerComponentModule,
    CommonModule,
    FormsModule
  ],
  exports: [SignupFormComponent]
})
export class SignupFormComponentModule { }
