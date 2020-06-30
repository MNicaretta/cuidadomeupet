import { Component, OnInit, Input } from '@angular/core';
import { PetsService } from '../pets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Profile } from 'src/app/core/models/profile';
import { Pet } from 'src/app/core/models/pet';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  @Input() pets: Pet[];

  constructor() { }

  ngOnInit(): void {
  }
}
