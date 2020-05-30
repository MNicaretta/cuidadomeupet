import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesSelectorComponent } from './species-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { SpeciesService } from './species.service';

@NgModule({
  declarations: [
    SpeciesSelectorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SpeciesSelectorComponent
  ],
  providers: [
    SpeciesService
  ]
})
export class SpeciesSelectorModule { }
