import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Pet } from 'src/app/core/models/pet';

@Component({
  selector: 'app-pet-popup',
  templateUrl: './pet-popup.component.html',
  styleUrls: ['./pet-popup.component.scss']
})
export class PetPopupComponent implements OnInit {

  @Input() pet: Pet;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
