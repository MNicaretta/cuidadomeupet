import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { User } from '../home/signup/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  activeTab = 'profile';

  profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
    ) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
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
      actualPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).*/)
        ]
      ],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).*/)
        ]
      ],
      confirmPassword: [
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

  tabActive(activeTab){
    this.activeTab = activeTab;
  }

  update(): void {
    const user = this.profileForm.value as User;

    this.profileService
      .updateUser(user)
      .subscribe(
        (value) => console.log(value),
        err => console.error(err)
      );
  }
}
