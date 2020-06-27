import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { EnumMap } from 'src/app/core/models/enum-map';
import { SpeciesService } from './species.service';

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

  allSpecies: EnumMap[] = [];
  available: EnumMap[] = [];

  selected: string[] = [];

  propagateChange = (_: any) => {};

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.speciesService
      .getAvailableSpecies()
      .subscribe(value => {
        this.allSpecies = value;
        this.allSpecies.sort((a, b) => a.label.localeCompare(b.label));

        this.available = [...this.allSpecies];
      });
  }

  add(species: string) {
    this.selected.push(species);
    this.update();
  }

  remove(species: string) {
    this.selected.splice(this.selected.indexOf(species), 1);
    this.update();
  }

  update() {
    this.propagateChange(this.selected);
    this.available = this.allSpecies.filter(el => !this.selected.includes(el.value));
  }

  getSpeciesLabel(value: string) {
    return this.allSpecies.find(species => species.value === value)?.label ?? 'erro';
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.selected = obj;
      this.update();
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void {}
}
