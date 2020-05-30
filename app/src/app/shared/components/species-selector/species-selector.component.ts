import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Species } from 'src/app/core/models/species';
import { SpeciesService } from './species.service';

@Component({
  selector: 'app-species-selector',
  templateUrl: './species-selector.component.html',
  styleUrls: ['./species-selector.component.scss']
})
export class SpeciesSelectorComponent implements OnInit {

  allSpecies: Species[] = [];
  available: Species[] = [];

  @Input() selected: string[] = [];
  @Output() selectedChange = new EventEmitter<string[]>();

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {

    this.speciesService
      .getAvailableSpecies()
      .subscribe(value => {
        this.allSpecies = value;
        this.allSpecies.sort((a, b) => a.label.localeCompare(b.label));
        this.updateAvailable();
      });
  }

  add(species: string) {

    this.selected.push(species);
    this.updateAvailable();
  }

  remove(species: string) {

    this.selected.splice(this.selected.indexOf(species), 1);
    this.updateAvailable();
  }

  updateAvailable() {

    this.available = this.allSpecies.filter(el => !this.selected.includes(el.value));
  }

  getSpeciesLabel(value: string) {

    return this.allSpecies.find(species => species.value === value)?.label ?? 'erro';
  }
}
