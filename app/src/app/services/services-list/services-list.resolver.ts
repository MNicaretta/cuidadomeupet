import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ServiceWrapper } from '../../core/models/service';
import { ServicesService } from '../services.service';


@Injectable({ providedIn: 'root' })
export class ServicesListResolver implements Resolve<Observable<ServiceWrapper[]>> {

  constructor(private serviceService: ServicesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServiceWrapper[]> {
    return this.serviceService.getServices();
  }
}
