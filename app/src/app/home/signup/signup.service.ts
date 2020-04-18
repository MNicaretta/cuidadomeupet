import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

const API_URL = "http://localhost:8080/api";

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) {}

  signup(user: User) {
    return this.http.post(API_URL + '/users', user);
  }
}
