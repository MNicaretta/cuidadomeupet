import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressesSelectorComponent } from './addresses-selector.component';

@NgModule({
  declarations: [
    AddressesSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddressesSelectorComponent
  ]
})
export class AddressesSelectorModule { }
