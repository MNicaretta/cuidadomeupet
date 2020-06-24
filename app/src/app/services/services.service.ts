import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service, ServiceWrapper } from '../core/models/service';
import { EnumMap } from '../core/models/enum-map';

const API_URL = "/api/services";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getServices() {
    return this.http.get<ServiceWrapper[]>(API_URL);
  }

  addService(service: Service) {
    return this.http.post<Service>(API_URL, service);
  }

  updateService(service: Service) {
    return this.http.put<Service>(API_URL + '/' + service.id, service);
  }

  deleteService(service: Service) {
    return this.http.delete<Service>(API_URL + '/' + service.id);
  }

  getServiceTypes() {
    return this.http.get<EnumMap[]>(API_URL + '/types');
  }
}
