import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Species } from 'src/app/core/models/species';

const API = '/api/species'

@Injectable()
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getAvailableSpecies(): Observable<Species[]> {
    return this.http.get<Species[]>(API);
  }
}
