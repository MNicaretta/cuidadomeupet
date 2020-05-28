import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from './service';

const API_URL = "/api/services";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getServices() {
    return this.http.get<Service[]>(API_URL);
  }

  addService(service: Service) {
    return this.http.post<Service>(API_URL, service);
  }

  updateService(service: Service) {
    return this.http.put<Service>(API_URL + '/' + service.id + '/' + service.revision, service);
  }

  deleteService(service: Service) {
    return this.http.delete<Service>(API_URL + '/' + service.id + '/' + service.revision);
  }

}
