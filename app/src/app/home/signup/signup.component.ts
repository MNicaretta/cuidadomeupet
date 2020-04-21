import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/auth/auth.service';
import { User } from 'src/app/core/models/user';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).*/)
        ]
      ]
    });

  }

  signup(): void {
    const user = this.signupForm.value as User;

    this.authService
      .signup(user)
      .subscribe(
        (value) => console.log(value),
        err => console.error(err)
      );
  }

}
