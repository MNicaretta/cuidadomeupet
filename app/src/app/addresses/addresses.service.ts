import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Address } from '../core/models/address';
import { EnumMap } from '../core/models/enum-map';

const API_URL = "/api/addresses";

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  constructor(private http: HttpClient) { }

  addAddress(address: Address) {
    return this.http.post<Address>(API_URL, address);
  }

  getAvailableAddresses() {
    return this.http.get<Address[]>(API_URL);
  }

  getAddressTypes() {
    return this.http.get<EnumMap[]>(API_URL + "/types");
  };
}
