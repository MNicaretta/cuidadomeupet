import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../core/models/user';

const API_URL = "http://localhost:8080/api/users";

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  getCurrent() {
    return this.http.get<User>(API_URL + '/current');
  }

  updateUser(user: User) {
    return this.http.put<User>(API_URL + '/' + user.id + '/' + user.revision, user);
  }
}
