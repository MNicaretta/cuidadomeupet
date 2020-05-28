import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/core/models/species';

@Component({
  selector: 'app-species-selector',
  templateUrl: './species-selector.component.html',
  styleUrls: ['./species-selector.component.scss']
})
export class SpeciesSelectorComponent implements OnInit {

  available: Species[] = [];
  selected: Species[] = [];

  constructor() { }

  ngOnInit(): void {
    this.available.push({label: 'cachorro', value:'dog'},
                        {label: 'gato', value:'cat'},
                        {label: 'ave', value:'bird'});
  }

  add(species: string) {

    const index = this.available.findIndex(element => element.value === species);

    if (index !== -1) {
      this.available.push(...this.selected.splice(index, 1));
    }

  }

  remove(species: string) {

    const index = this.available.findIndex(element => element.value === species);

    if (index !== -1) {
      this.selected.push(...this.available.splice(index, 1));
    }

  }

}
