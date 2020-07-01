import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProfileService } from './profile.service';
import { User } from '../core/models/user';
import { Profile } from '../core/models/profile';
import { PetsService } from '../pets/pets.service';
import { Pet } from '../core/models/pet';
import { Address } from '../core/models/address';

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
  addresses: Address[];

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
    });

    this.activatedRoute.params.subscribe(params => {
      this.profile = this.activatedRoute.snapshot.data['currentUser'];

      if (this.profile) {
        this.currentUser = this.profile.user;
        this.profileForm.controls['name'].setValue(this.currentUser.name);
        this.profileForm.controls['email'].setValue(this.currentUser.email);
        this.profileForm.controls['description'].setValue(this.currentUser.description);

        this.pets = this.profile.pets;
        this.addresses = this.profile.addresses;
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
        () => alert('Usuário atualizado!'),
        err => { console.error(err); alert('Ocorreu um erro') }
      );
  }

  addPet(): void {
    const pet = this.petForm.value as Pet;

    pet.userId = this.currentUser.id;

    this.petsService
      .addPet(pet)
      .subscribe(
        () => console.log(this.activatedRoute.snapshot.data['currentUser'].pets),
        err => { console.error(err); alert('Ocorreu um erro') }
      );
  }
}
