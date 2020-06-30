import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../core/models/profile';
import { User } from '../core/models/user';
import { Pet } from '../core/models/pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  @Input() petList: Pet[];
  @Input() currentUser: User;

  constructor() { }

  ngOnInit(): void {
  }

  addPet(pet: Pet) {
    this.petList.push(pet);
  }
}
