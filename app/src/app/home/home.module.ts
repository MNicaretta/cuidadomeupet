import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormerrorModule } from '../shared/components/formerror/formerror.module';

@NgModule({
  declarations: [
    SignupComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormerrorModule,
    HomeRoutingModule
  ],
  exports: [
  ],
  providers: [
    SignupService
  ]
})
export class HomeModule { }
