import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { RouterModule } from '@angular/router';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsService } from './pets.service';
import { HttpClientModule } from '@angular/common/http';
import { PetsListResolver } from './pets-list/pets-list.resolver';
import { PetsFormComponent } from './pets-form/pets-form.component';
import { FormerrorModule } from '../shared/components/formerror/formerror.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PetsComponent, PetsListComponent, PetsFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormerrorModule,
    PetsRoutingModule
  ],
  providers: [
    PetsService,
    PetsListResolver
  ]
})
export class PetsModule { }
