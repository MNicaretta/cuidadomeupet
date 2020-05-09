import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { User } from '../core/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  activeTab = 'profile';
  currentUser: User;
  profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute
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
      description: [
        ''
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

    this.activatedRoute.params.subscribe(params => {
      this.currentUser = this.activatedRoute.snapshot.data['currentUser'];
      if (this.currentUser) {
        this.profileForm.controls['name'].setValue(this.currentUser.name);
        this.profileForm.controls['email'].setValue(this.currentUser.email);
        this.profileForm.controls['description'].setValue(this.currentUser.description);

        console.log(this.currentUser.createdDate);
      }
    });

  }

  tabActive(activeTab: string) {
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
