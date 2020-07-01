import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { OrdersComponent } from './orders.component';
import { EvaluationsModule } from '../evaluations/evaluations.module';
import { UserPopupComponent } from './user-popup/user-popup.component';
import { PetPopupComponent } from './pet-popup/pet-popup.component';
import { AddressPopupComponent } from './address-popup/address-popup.component';

@NgModule({
  declarations: [
    OrdersComponent,
    UserPopupComponent,
    PetPopupComponent,
    AddressPopupComponent
  ],
  imports: [
    CommonModule,
    EvaluationsModule,
    NgbModalModule
  ],
  exports: [
    OrdersComponent
  ],
})
export class OrdersModule { }
