import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

import { TokenService } from './token.service';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';

const API_URL = '/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('userName'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  signup(user: User) {

    return this.http
      .post(
        API_URL + '/signup',
        user,
        { observe: 'response' }
      )
      .pipe(tap(res => {
        const token = res.body['token'];
        const user = res.body['user'] as User;
        this.tokenService.setToken(token);
        localStorage.setItem('userName', user.name);
        this.currentUserSubject.next(user.name);
      }));
  }

  signin(email: string, password: string) {

    return this.http
      .post(
        API_URL + '/signin',
        { email, password },
        { observe: 'response' }
      )
      .pipe(tap(res => {
        const token = res.body['token'];
        const user = res.body['user'] as User;
        this.tokenService.setToken(token);
        localStorage.setItem('userName', user.name);
        this.currentUserSubject.next(user.name);
      }));
  }

  signout() {
    this.tokenService.removeToken();
    localStorage.removeItem('userName');
    this.currentUserSubject.next(null);
  }
}
