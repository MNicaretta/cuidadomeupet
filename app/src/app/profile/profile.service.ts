import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../core/models/user';

const API_URL = "http://localhost:8080/api/users";

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User[]>(API_URL);
  }

  updateUser(user: User) {
    return this.http.put<User>(API_URL + '/' + user.id + '/' + user.revision, user);
  }

  signOut(user: User) {
    return this.http.delete<User>(API_URL + '/' + user.email);
  }
}