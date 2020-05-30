import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesRoutingModule } from './services-routing.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SpeciesSelectorModule } from '../shared/components/species-selector/species-selector.module';


@NgModule({
  declarations: [ServicesComponent, ServicesListComponent, ServicesFormComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    NgbDatepickerModule,
    SpeciesSelectorModule
  ]
})
export class ServicesModule { }
