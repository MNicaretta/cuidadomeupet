import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { ServicesComponent } from './services.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesRoutingModule } from './services-routing.module';
import { SpeciesListSelectorModule } from '../shared/components/species-list-selector/species-list-selector.module';
import { ServiceTypesSelectorModule } from '../shared/components/service-types-selector/service-types-selector.module';
import { DateRangePickerModule } from '../shared/components/date-range-picker/date-range-picker.module';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { RouterModule } from '@angular/router';
import { ServicesEvaluationsComponent } from './services-evaluations/services-evaluations.component';
import { ServicesEvaluationsFormComponent } from './services-evaluations/services-evaluations-form/services-evaluations-form.component';
import { ServicesEvaluationsListComponent } from './services-evaluations/services-evaluations-list/services-evaluations-list.component';


@NgModule({
  declarations: [ServicesComponent, ServicesListComponent, ServicesFormComponent, ServicesDetailsComponent, ServicesEvaluationsComponent, ServicesEvaluationsFormComponent, ServicesEvaluationsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesRoutingModule,
    SpeciesListSelectorModule,
    ServiceTypesSelectorModule,
    DateRangePickerModule,
    NgbDatepickerModule,
    RouterModule
  ]
})
export class ServicesModule { }
