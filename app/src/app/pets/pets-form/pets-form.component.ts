import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PetsService } from '../pets.service';
import { Pet } from '../../core/models/pet';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-pets-form',
  templateUrl: './pets-form.component.html',
  styleUrls: ['./pets-form.component.scss']
})
export class PetsFormComponent implements OnInit {

  @Input() currentUser: User;
  @Output() onAddPet = new EventEmitter<Pet>();
  petForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private petsService: PetsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.petForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required]
      ],
      species: [
        'DOG',
        [Validators.required]
      ],
      additionalInfo: [
        ''
      ]
    });
  }

  addPet(): void {
    const pet: Pet = {
      userId: this.currentUser.id,
      name: this.petForm.value['name'],
      species: this.petForm.value['species'],
      additionalInfo: this.petForm.value['additionalInfo']
    };

    this.petsService
      .addPet(pet)
      .subscribe(
        (value) => this.onAddPet.emit(value),
        err => { console.error(err); alert('Ocorreu um erro') }
      );
  }
}
