import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { Address } from 'src/app/core/models/address';
import { AddressesService } from '../addresses.service';


@Component({
  selector: 'app-addresses-form',
  templateUrl: './addresses-form.component.html',
  styleUrls: ['./addresses-form.component.scss']
})
export class AddressesFormComponent implements OnInit {

  addressesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private addressesService: AddressesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addressesForm = this.formBuilder.group({
      address: [
        '',
        [Validators.required]
      ],
      size: [
        '',
        [Validators.required]
      ],
      type: [
        '',
        [Validators.required]
      ],
      zip: [
        '',
        [Validators.required]
      ]
    });
  }

  save(): void {
    const address = { ...this.addressesForm.value, userId: 2 } as Address;

    this.addressesService
      .addAddress(address)
      .subscribe(
        (value) => this.router.navigate(['addresses']),
        err => console.error(err)
      );
  }

  cancel(): void {
    this.router.navigate(['addresses']);
  }
}


