import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { ServicesComponent } from './services.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesRoutingModule } from './services-routing.module';
import { EvaluationsModule } from '../evaluations/evaluations.module';
import { SpeciesListSelectorModule } from '../shared/components/species-list-selector/species-list-selector.module';
import { ServiceTypesSelectorModule } from '../shared/components/service-types-selector/service-types-selector.module';
import { DateRangePickerModule } from '../shared/components/date-range-picker/date-range-picker.module';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { PetsSelectorModule } from '../shared/components/pets-selector/pets-selector.module';
import { AddressesSelectorModule } from '../shared/components/addresses-selector/addresses-selector.module';

@NgModule({
  declarations: [
    ServicesComponent,
    ServicesListComponent,
    ServicesFormComponent,
    ServicesDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesRoutingModule,
    SpeciesListSelectorModule,
    ServiceTypesSelectorModule,
    PetsSelectorModule,
    AddressesSelectorModule,
    EvaluationsModule,
    DateRangePickerModule,
    NgbDatepickerModule,
    RouterModule
  ]
})
export class ServicesModule { }
