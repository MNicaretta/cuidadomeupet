import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesFormComponent } from './services-form/services-form.component';



@NgModule({
  declarations: [ServicesComponent, ServicesListComponent, ServicesFormComponent],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
