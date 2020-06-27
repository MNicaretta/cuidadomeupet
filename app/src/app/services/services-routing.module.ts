import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/auth/auth.guard';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesComponent } from './services.component';
import { ServicesListResolver } from './services-list/services-list.resolver';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: '',
        component: ServicesListComponent,
        resolve: { services: ServicesListResolver },
      },
      {
        path: 'add',
        component: ServicesFormComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'view/:id',
        component: ServicesDetailsComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
