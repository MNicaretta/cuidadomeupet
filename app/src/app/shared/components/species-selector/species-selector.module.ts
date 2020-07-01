import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesSelectorComponent } from './species-selector.component';

@NgModule({
  declarations: [
    SpeciesSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpeciesSelectorComponent
  ]
})
export class SpeciesSelectorModule { }
