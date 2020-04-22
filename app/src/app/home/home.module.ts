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
import { MainComponent } from './main/main.component';
import { SigninComponent } from './signin/signin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SigninService } from './signin/signin.service';

@NgModule({
  declarations: [
    SignupComponent,
    HomeComponent,
    MainComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormerrorModule,
    FontAwesomeModule,
    HomeRoutingModule
  ],
  exports: [
  ],
  providers: [
    SignupService,
    SigninService
  ]
})
export class HomeModule { }
