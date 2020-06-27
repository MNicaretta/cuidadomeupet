import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../core/models/address';


const API_URL = "/api/addresses";

@Injectable()
export class AddressesService {

  constructor(private http: HttpClient) { }

  getAddresses() {
    return this.http.get<Address[]>(API_URL);
  }

  addAddress(address: Address) {
    return this.http.post<Address>(API_URL, address);
  }

  updateAddress(address: Address) {
    return this.http.put<Address>(API_URL + '/' + address.id , address);
  }

  deleteAddress(address: Address) {
    return this.http.delete<Address>(API_URL + '/' + address.id);
  }
}
