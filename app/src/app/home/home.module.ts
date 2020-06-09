import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

import { FormerrorModule } from '../shared/components/formerror/formerror.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    SignupComponent,
    HomeComponent,
    MainComponent,
    SigninComponent,
    AboutComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ChartsModule,
    FormerrorModule,
    HomeRoutingModule
  ],
  exports: [
  ]
})
export class HomeModule { }
