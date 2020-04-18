import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService } from './signup.service';
import { User } from './user';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private signupService: SignupService
  ) { }

  ngOnInit(): void {
  }

  signup(): void {
    const user = this.formGroup.value as User;

    this.signupService
      .signup(user)
      .subscribe(
        (value) => console.log(value),
        err => console.error(err)
      );
  }

}
