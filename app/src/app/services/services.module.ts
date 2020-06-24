import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServicesComponent } from './services.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesRoutingModule } from './services-routing.module';
import { SpeciesSelectorModule } from '../shared/components/species-selector/species-selector.module';
import { ServiceTypesSelectorModule } from '../shared/components/service-types-selector/service-types-selector.module';
import { DateRangePickerModule } from '../shared/components/date-range-picker/date-range-picker.module';


@NgModule({
  declarations: [ServicesComponent, ServicesListComponent, ServicesFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesRoutingModule,
    SpeciesSelectorModule,
    ServiceTypesSelectorModule,
    DateRangePickerModule
  ]
})
export class ServicesModule { }
