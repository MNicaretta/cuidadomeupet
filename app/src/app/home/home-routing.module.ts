import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { LoginGuard } from '../core/auth/login.guard';
import { AuthGuard } from '../core/auth/auth.guard';
import { StatisticsResolver } from './statistics/statistics.resolver';

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
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
        canActivate: [AuthGuard],
        resolve: { statistics: StatisticsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
