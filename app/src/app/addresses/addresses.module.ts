import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

import { AddressesComponent } from './addresses.component';
import { AddressesListComponent } from './addresses-list/addresses-list.component';
import { AddressesFormComponent } from './addresses-form/addresses-form.component';
import { AddressTypeSelectorModule } from '../shared/components/address-type-selector/address-type-selector.module';

@NgModule({
  declarations: [
    AddressesComponent,
    AddressesListComponent,
    AddressesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AddressTypeSelectorModule,
    TextMaskModule
  ],
  exports: [
    AddressesComponent
  ]
})
export class AddressesModule { }
