import { Injectable } from "@angular/core";
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class UserValidationService {

  constructor(private authService: AuthService) {}

  userValidation() {

    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(email => this.authService.validateUser(email)))
        .pipe(map(response => !response['validEmail'] ? { invalidEmail: true } : null))
        .pipe(first());
    };
  }
}
