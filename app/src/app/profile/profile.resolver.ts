import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../core/models/user';
import { ProfileService } from './profile.service';

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<Observable<User>> {

  constructor(private profileService: ProfileService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.profileService.getCurrent();
  }
}
