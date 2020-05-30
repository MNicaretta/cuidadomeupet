import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { User } from '../core/models/user';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../pets/pet';
import { Profile } from '../core/models/profile';
import { PetsService } from '../pets/pets.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  activeTab = 'profile';
  profile: Profile;
  profileForm: FormGroup;
  petForm: FormGroup;
  currentUser: User;
  pets: Pet[];

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private petsService: PetsService,
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

    this.petForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required]
      ],
      additionalInfo: [
        ''
      ]
    });

    this.activatedRoute.params.subscribe(params => {
      this.profile = this.activatedRoute.snapshot.data['currentUser'];

      if (this.profile) {
        this.currentUser = this.profile.user;
        this.profileForm.controls['name'].setValue(this.currentUser.name);
        this.profileForm.controls['email'].setValue(this.currentUser.email);
        this.profileForm.controls['description'].setValue(this.currentUser.description);

        this.pets = this.profile.pets;
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

  addPet(): void {
    const pet = this.petForm.value as Pet;

    pet.userId = this.currentUser.id;

    this.petsService
      .addPet(pet)
      .subscribe(
        (value) => console.log(this.activatedRoute.snapshot.data['currentUser'].pets),
        err => console.error(err)
      );
  }
}
