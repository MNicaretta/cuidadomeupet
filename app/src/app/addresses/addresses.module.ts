import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesComponent } from './addresses.component';
import { AddressesListComponent } from './addresses-list/addresses-list.component';
import { AddressesFormComponent } from './addresses-form/addresses-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormerrorModule } from '../shared/components/formerror/formerror.module';
import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressesService } from './addresses.service';
import { AddressesListResolver } from './addresses-list/addresses-list.resolver';



@NgModule({
  declarations: [AddressesComponent, AddressesListComponent, AddressesFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormerrorModule,
    AddressesRoutingModule
  ],
  providers: [
    AddressesService,
    AddressesListResolver
  ]
})
export class AddressesModule { }
