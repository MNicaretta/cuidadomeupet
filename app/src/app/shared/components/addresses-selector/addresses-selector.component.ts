import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Address } from 'src/app/core/models/address';

@Component({
  selector: 'app-addresses-selector',
  templateUrl: './addresses-selector.component.html',
  styleUrls: ['./addresses-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressesSelectorComponent),
      multi: true
    }
  ]
})
export class AddressesSelectorComponent implements OnInit, ControlValueAccessor {

  @Input() addresses: Address[];

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
