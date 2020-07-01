import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Service } from '../../core/models/service';
import { ServicesService } from '../services.service';

@Injectable({ providedIn: 'root' })
export class ServicesListResolver implements Resolve<Observable<Service[]>> {

  constructor(private serviceService: ServicesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Service[]> {
    return this.serviceService.getServices();
  }
}
