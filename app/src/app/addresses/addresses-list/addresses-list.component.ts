import { Component, OnInit, Input } from '@angular/core';
import { Address } from 'src/app/core/models/address';

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.scss']
})
export class AddressesListComponent implements OnInit {

  @Input() addresses: Address[];

  constructor() { }

  ngOnInit(): void {
  }
}
