import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authentication } from './authentication';

const API_URL = "http://localhost:8080/auth";

@Injectable()
export class SigninService {

  constructor(private http: HttpClient) { }

  login(authentication: Authentication) {
    return this.http.post(API_URL + '/login', authentication);
  }
}
