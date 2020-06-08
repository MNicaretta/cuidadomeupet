import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { EnumMap } from 'src/app/core/models/enum-map';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-service-types-selector',
  templateUrl: './service-types-selector.component.html',
  styleUrls: ['./service-types-selector.component.scss']
})
export class ServiceTypesSelectorComponent implements OnInit, ControlValueAccessor {

  types: EnumMap[] = [];

  selected: string;
  propagateChange = (_: any) => {};

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesService
      .getServiceTypes()
      .subscribe(value => this.types = value);
  }

  select(value: string) {
    this.selected = value;
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

  registerOnTouched(): void {}
}
