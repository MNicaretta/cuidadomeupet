import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesSelectorComponent } from './species-selector.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SpeciesSelectorComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports: [
    SpeciesSelectorComponent
  ]
})
export class SpeciesSelectorModule { }
