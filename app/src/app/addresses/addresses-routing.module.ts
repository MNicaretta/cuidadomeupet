import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/auth/auth.guard';

import { AddressesComponent } from './addresses.component';
import { AddressesListComponent } from './addresses-list/addresses-list.component';
import { AddressesListResolver } from './addresses-list/addresses-list.resolver';
import { AddressesFormComponent } from './addresses-form/addresses-form.component';


const routes: Routes = [
  {
    path: '',
    component: AddressesComponent,
    canActivate: [
      AuthGuard
    ],
    children: [
      {
        path: '',
        component: AddressesListComponent,
        resolve: { addresses: AddressesListResolver }
      },
      {
        path: 'add',
        component: AddressesFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressesRoutingModule { }
