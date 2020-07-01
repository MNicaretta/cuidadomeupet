import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './profile.resolver';
import { CoreModule } from '../core/core.module';
import { PetsService } from '../pets/pets.service';
import { PetsModule } from '../pets/pets.module';
import { AddressesModule } from '../addresses/addresses.module';
import { EvaluationsModule } from '../evaluations/evaluations.module';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ProfileRoutingModule,
    PetsModule,
    EvaluationsModule,
    OrdersModule,
    CoreModule,
    AddressesModule
  ],
  providers: [
    ProfileService,
    PetsService,
    ProfileResolver
  ]
})
export class ProfileModule { }
