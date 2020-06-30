import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesComponent } from './addresses.component';
import { AddressesListComponent } from './addresses-list/addresses-list.component';
import { AddressesFormComponent } from './addresses-form/addresses-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormerrorModule } from '../shared/components/formerror/formerror.module';
import { AddressesService } from './addresses.service';
import { AddressesListResolver } from './addresses-list/addresses-list.resolver';
import { AddressTypeSelectorModule } from '../shared/components/address-type-selector/address-type-selector.module';



@NgModule({
  declarations: [AddressesComponent, AddressesListComponent, AddressesFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormerrorModule,
    AddressTypeSelectorModule
  ],
  providers: [
    AddressesService,
    AddressesListResolver
  ],
  exports: [
    AddressesComponent
  ]
})
export class AddressesModule { }
