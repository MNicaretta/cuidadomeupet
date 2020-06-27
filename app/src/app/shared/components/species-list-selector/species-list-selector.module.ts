import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesListSelectorComponent } from './species-list-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { SpeciesService } from './species.service';

@NgModule({
  declarations: [
    SpeciesListSelectorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SpeciesListSelectorComponent
  ],
  providers: [
    SpeciesService
  ]
})
export class SpeciesListSelectorModule { }
