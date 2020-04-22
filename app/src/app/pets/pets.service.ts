import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './pet';

const API_URL = "/api/pets";

@Injectable()
export class PetsService {

  constructor(private http: HttpClient) { }

  getPets() {
    return this.http.get<Pet[]>(API_URL);
  }

  addPet(pet: Pet) {
    return this.http.post<Pet>(API_URL, pet);
  }

  updatePet(pet: Pet) {
    return this.http.put<Pet>(API_URL + '/' + pet.id + '/' + pet.revision, pet);
  }

  deletePet(pet: Pet) {
    return this.http.delete<Pet>(API_URL + '/' + pet.id + '/' + pet.revision);
  }
}
