import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsListResolver } from './pets-list/pets-list.resolver';
import { PetsFormComponent } from './pets-form/pets-form.component';

const routes: Routes = [
  {
    path: '',
    component: PetsComponent,
    children: [
      {
        path: '',
        component: PetsListComponent,
        resolve: { pets: PetsListResolver }
      },
      {
        path: 'add',
        component: PetsFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
