import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Pet } from 'src/app/core/models/pet';

@Component({
  selector: 'app-pets-selector',
  templateUrl: './pets-selector.component.html',
  styleUrls: ['./pets-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PetsSelectorComponent),
      multi: true
    }
  ]
})
export class PetsSelectorComponent implements OnInit, ControlValueAccessor {

  @Input() pets: Pet[];

  selected: number;
  propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit(): void {
  }

  select(value: string): void {
    this.selected = parseInt(value);
    this.propagateChange(this.selected);
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.selected = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void {
  }
}
