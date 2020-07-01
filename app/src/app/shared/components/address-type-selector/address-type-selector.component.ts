import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { EnumMap } from 'src/app/core/models/enum-map';
import { AddressesService } from 'src/app/addresses/addresses.service';

@Component({
  selector: 'app-address-type-selector',
  templateUrl: './address-type-selector.component.html',
  styleUrls: ['./address-type-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressTypeSelectorComponent),
      multi: true
    }
  ]
})
export class AddressTypeSelectorComponent implements OnInit, ControlValueAccessor {

  addressTypes: EnumMap[] = [];

  selected: string;
  propagateChange = (_: any) => { };

  constructor(private addressesService: AddressesService) { }

  ngOnInit(): void {
    this.addressesService
      .getAddressTypes()
      .subscribe(value => this.addressTypes = value);
  }

  select(value: string) {
    this.selected = value;
    this.propagateChange(this.selected);
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.selected = obj ? obj : '';
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void { }

}
