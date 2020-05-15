import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileResolver } from './profile.resolver';
import { CoreModule } from '../core/core.module';
registerLocaleData(localeBr, 'br');

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
    ProfileResolver,
    { provide: LOCALE_ID, useValue: 'br' }
  ]
})
export class ProfileModule { }
