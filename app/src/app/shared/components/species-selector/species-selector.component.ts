import { Component, OnInit, forwardRef } from '@angular/core';
import { SpeciesService } from '../species-list-selector/species.service';
import { EnumMap } from 'src/app/core/models/enum-map';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-species-selector',
  templateUrl: './species-selector.component.html',
  styleUrls: ['./species-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SpeciesSelectorComponent),
      multi: true
    }
  ]
})
export class SpeciesSelectorComponent implements OnInit, ControlValueAccessor {

  species: EnumMap[] = [];
  propagateChange = (_: any) => { };

  constructor(private speciesService: SpeciesService) { }

  selected: string;

  ngOnInit(): void {
    this.speciesService
      .getAvailableSpecies()
      .subscribe(value => this.species = value);
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
