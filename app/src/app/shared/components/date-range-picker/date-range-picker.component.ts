import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DateRange } from 'src/app/core/models/date-range';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true
    }
  ]
})
export class DateRangePickerComponent implements OnInit, ControlValueAccessor {

  _hoveredDate: Date = null;

  value: DateRange = {};

  propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit(): void {
  }

  set hoveredDate(ngdDate: NgbDate) {
    this._hoveredDate = ngdDate ? new Date(ngdDate.year, ngdDate.month - 1, ngdDate.day) : null;
  }

  onDateSelection(ngdDate: NgbDate) {
    const date = new Date(ngdDate.year, ngdDate.month - 1, ngdDate.day);

    if (!this.value.start && !this.value.end) {
      this.value.start = date;
    } else if (this.value.start && !this.value.end && date.getTime() > this.value.start.getTime()) {
      this.value.end = date;
    } else {
      this.value.end = null;
      this.value.start = date;
    }

    this.propagateChange(this.value);
  }

  isHovered(ngdDate: NgbDate) {
    const date = new Date(ngdDate.year, ngdDate.month - 1, ngdDate.day);

    return this.value.start &&
          !this.value.end &&
           this.hoveredDate &&
           date.getTime() > this.value.start.getTime() &&
           date.getTime() < this._hoveredDate.getTime();
  }

  isInside(ngdDate: NgbDate) {
    const date = new Date(ngdDate.year, ngdDate.month - 1, ngdDate.day);

    return this.value.start && this.value.end &&
           date.getTime() > this.value.start.getTime() &&
           date.getTime() < this.value.end.getTime();
  }

  isRange(ngdDate: NgbDate) {
    const date = new Date(ngdDate.year, ngdDate.month - 1, ngdDate.day);

    return (this.value.start && date.getTime() === this.value.start.getTime()) ||
           (this.value.end && date.getTime() === this.value.end.getTime()) ||
           this.isInside(ngdDate) || this.isHovered(ngdDate);
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.value = obj;
      this.propagateChange(this.value);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}
}
