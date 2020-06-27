import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { ServicesComponent } from './services.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesRoutingModule } from './services-routing.module';
import { SpeciesSelectorModule } from '../shared/components/species-selector/species-selector.module';
import { ServiceTypesSelectorModule } from '../shared/components/service-types-selector/service-types-selector.module';
import { DateRangePickerModule } from '../shared/components/date-range-picker/date-range-picker.module';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ServicesComponent, ServicesListComponent, ServicesFormComponent, ServicesDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesRoutingModule,
    SpeciesSelectorModule,
    ServiceTypesSelectorModule,
    DateRangePickerModule,
    NgbDatepickerModule,
    RouterModule
  ]
})
export class ServicesModule { }
