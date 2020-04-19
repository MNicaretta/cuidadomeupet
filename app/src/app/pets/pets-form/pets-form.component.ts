import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PetsService } from '../pets.service';
import { Pet } from '../pet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets-form',
  templateUrl: './pets-form.component.html',
  styleUrls: ['./pets-form.component.scss']
})
export class PetsFormComponent implements OnInit {

  petsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private petsService: PetsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.petsForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required]
      ],
      additionalInfo: [
        ''
      ]
    });
  }

  save(): void {
    const pet = { ...this.petsForm.value, userId: 2 } as Pet;

    this.petsService
      .addPet(pet)
      .subscribe(
        (value) => this.router.navigate(['pets']),
        err => console.error(err)
      );
  }

  cancel(): void {
    this.router.navigate(['pets']);
  }
}
