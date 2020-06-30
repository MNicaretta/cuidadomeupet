import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesListSelectorComponent } from './species-list-selector.component';
import { SpeciesService } from './species.service';

@NgModule({
  declarations: [
    SpeciesListSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpeciesListSelectorComponent
  ]
})
export class SpeciesListSelectorModule { }
