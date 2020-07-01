import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceTypesSelectorComponent } from './service-types-selector.component';
import { ServicesService } from 'src/app/services/services.service';

@NgModule({
  declarations: [ServiceTypesSelectorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ServiceTypesSelectorComponent
  ],
  providers: [
    ServicesService
  ]
})
export class ServiceTypesSelectorModule { }
