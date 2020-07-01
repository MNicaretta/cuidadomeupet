import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { EvaluationsListComponent } from './evaluations-list/evaluations-list.component';
import { EvaluationsFormComponent } from './evaluations-form/evaluations-form.component';

@NgModule({
  declarations: [
    EvaluationsListComponent,
    EvaluationsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule
  ],
  exports: [
    EvaluationsListComponent,
    EvaluationsFormComponent
  ]
})
export class EvaluationsModule { }
