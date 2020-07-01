import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Address } from 'src/app/core/models/address';

@Component({
  selector: 'app-address-popup',
  templateUrl: './address-popup.component.html',
  styleUrls: ['./address-popup.component.scss']
})
export class AddressPopupComponent implements OnInit {

  @Input() address: Address;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
