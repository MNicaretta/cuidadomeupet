import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateRangePickerComponent } from './date-range-picker.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DateRangePickerComponent
  ],
  imports: [
    CommonModule,
    NgbDatepickerModule,
  ],
  exports: [
    DateRangePickerComponent
  ]
})
export class DateRangePickerModule { }
