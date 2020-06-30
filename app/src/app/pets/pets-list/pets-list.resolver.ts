import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PetsService } from '../pets.service';
import { Pet } from 'src/app/core/models/pet';

@Injectable({ providedIn: 'root' })
export class PetsListResolver implements Resolve<Observable<Pet[]>> {

  constructor(private petService: PetsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pet[]> {
    return this.petService.getPets();
  }
}
