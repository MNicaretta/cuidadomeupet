import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-popup',
  templateUrl: './user-popup.component.html',
  styleUrls: ['./user-popup.component.scss']
})
export class UserPopupComponent implements OnInit {

  @Input() user: User;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
