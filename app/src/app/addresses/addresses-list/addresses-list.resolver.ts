import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Address } from 'src/app/core/models/address';
import { AddressesService } from '../addresses.service';




@Injectable({ providedIn: 'root' })
export class AddressesListResolver implements Resolve<Observable<Address[]>> {

  constructor(private addressService: AddressesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Address[]> {
    return this.addressService.getAddresses();
  }
}
