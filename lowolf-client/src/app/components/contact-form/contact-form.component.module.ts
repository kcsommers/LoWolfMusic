import { NgModule } from '@angular/core';
import { ContactFormComponent } from './contact-form.component';
import { SpinnerComponentModule } from '../spinner/spinner.component.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    SpinnerComponentModule,
    CommonModule,
    FormsModule
  ],
  exports: [ContactFormComponent]
})
export class ContactFormComponentModule { }
