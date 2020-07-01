import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../core/models/address';
import { User } from '../core/models/user';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  @Input() addressList: Address[];
  @Input() currentUser: User;

  constructor() { }

  ngOnInit(): void {
  }

  addAddress(address: Address) {
    this.addressList.push(address);
  }
}
