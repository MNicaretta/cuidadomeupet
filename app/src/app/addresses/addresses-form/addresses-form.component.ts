import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { Address } from 'src/app/core/models/address';
import { AddressesService } from '../addresses.service';
import { User } from 'src/app/core/models/user';


@Component({
  selector: 'app-addresses-form',
  templateUrl: './addresses-form.component.html',
  styleUrls: ['./addresses-form.component.scss']
})
export class AddressesFormComponent implements OnInit {

  @Input() currentUser: User;
  @Output() onAddAddress = new EventEmitter<Address>();

  addressesForm: FormGroup;
  zipMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  constructor(
    private formBuilder: FormBuilder,
    private addressesService: AddressesService,
  ) { }

  ngOnInit(): void {
    this.addressesForm = this.formBuilder.group({
      address: [
        '',
        [Validators.required]
      ],
      type: [
        '',
        [Validators.required]
      ],
      zip: [
        '',
        [Validators.required, Validators.pattern(/\d{5}-\d{3}/)]
      ]
    });
  }

  addAddress(): void {
    const address = { ...this.addressesForm.value, userId: this.currentUser.id } as Address;

    this.addressesService
      .addAddress(address)
      .subscribe(
        (value) => { this.onAddAddress.emit(value); this.addressesForm.reset() },
        err => { console.error(err); alert('Ocorreu um erro') }
      );
  }
}


