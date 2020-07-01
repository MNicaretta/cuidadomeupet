import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { RouterModule } from '@angular/router';
import { PetsService } from './pets.service';
import { HttpClientModule } from '@angular/common/http';
import { PetsListResolver } from './pets-list/pets-list.resolver';
import { PetsFormComponent } from './pets-form/pets-form.component';
import { FormerrorModule } from '../shared/components/formerror/formerror.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeciesSelectorComponent } from '../shared/components/species-selector/species-selector.component';
import { SpeciesSelectorModule } from '../shared/components/species-selector/species-selector.module';
import { AddressTypeSelectorModule } from '../shared/components/address-type-selector/address-type-selector.module';

@NgModule({
  declarations: [PetsComponent, PetsListComponent, PetsFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormerrorModule,
    SpeciesSelectorModule
  ],
  providers: [
    PetsService,
    PetsListResolver
  ],
  exports: [
    PetsComponent
  ]
})
export class PetsModule { }
