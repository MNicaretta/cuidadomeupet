import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EnumMap } from 'src/app/core/models/enum-map';

const API = '/api/species'

@Injectable({
  providedIn: 'root'
})

export class SpeciesService {

  constructor(private http: HttpClient) { }

  getAvailableSpecies(): Observable<EnumMap[]> {
    return this.http.get<EnumMap[]>(API);
  }
}
