import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Authentication } from './authentication';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  faUser = faUser;
  signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private signinService: SigninService
  ) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
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
          Validators.required
        ]
      ]
    });
  }

  login() {
    const authentication = this.signinForm.value as Authentication;

    this.signinService
      .login(authentication)
      .subscribe(
        (value) => console.log(value),
        err => console.error(err)
      );
  }
}
