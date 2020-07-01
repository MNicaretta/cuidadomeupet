import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsSelectorComponent } from './pets-selector.component';

@NgModule({
  declarations: [
    PetsSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PetsSelectorComponent
  ]
})
export class PetsSelectorModule { }
