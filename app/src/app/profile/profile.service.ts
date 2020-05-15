import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../core/models/user';

const API_URL = "/api/profile";

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  getCurrent() {
    return this.http.get<User>(API_URL);
  }

  updateUser(user: User) {
    return this.http.post<User>(API_URL, user);
  }
}
