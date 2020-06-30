import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EnumMap } from 'src/app/core/models/enum-map';

const API = '/api/addressType'

@Injectable({
  providedIn: 'root'
})

export class AddressTypeService {

  constructor(private http: HttpClient) { }

  getAddressTypes(): Observable<EnumMap[]> {
    return this.http.get<EnumMap[]>(API);
  }
}
