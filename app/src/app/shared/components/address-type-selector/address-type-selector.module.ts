import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressTypeSelectorComponent } from './address-type-selector.component';

@NgModule({
  declarations: [
    AddressTypeSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddressTypeSelectorComponent
  ]
})
export class AddressTypeSelectorModule { }
