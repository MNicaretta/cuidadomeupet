import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './signin/signin.component';
import { LoginGuard } from '../core/auth/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'signup',
        component: SignupComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'signin',
        component: SigninComponent,
        canActivate: [LoginGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
