import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../core/models/user';
import { ProfileService } from './profile.service';
import { Profile } from '../core/models/profile';

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<Observable<Profile>> {

  constructor(private profileService: ProfileService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> {
    return this.profileService.getCurrent();
  }
}
