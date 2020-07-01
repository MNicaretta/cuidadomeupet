import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto signout
        this.authService.signout();
        alert('Sessão expirada!');
        this.router.navigate(
          ['signin']
        );
        }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
