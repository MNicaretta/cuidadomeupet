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

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ProfileRoutingModule,
    CoreModule
  ],
  providers: [
    ProfileService,
    PetsService,
    ProfileResolver
  ]
})
export class ProfileModule { }
