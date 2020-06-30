import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

import { ServicesService } from '../services.service';
import { Service } from '../../core/models/service';
import { ProfileService } from 'src/app/profile/profile.service';
import { User } from 'src/app/core/models/user';
import { dateRangeValidator } from 'src/app/shared/components/date-range-picker/date-range-validator.directive';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.scss']
})
export class ServicesFormComponent implements OnInit {

  servicesForm: FormGroup;
  currentUser: User;

  constructor(
    private servicesService: ServicesService,
    private profileService: ProfileService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.servicesForm = this.formBuilder.group({
      type: [
        'SITTING',
        [Validators.required],
      ],
      price: [
        0.0,
        [Validators.required, Validators.min(1)],
      ],
      dateRange: [
        {},
        [Validators.required, dateRangeValidator],
      ],
      species: [
        [],
        [Validators.required, Validators.minLength(1)],
      ],
      additionalInfo: [
        ''
      ]
    });

    this.profileService
      .getCurrentUser()
      .subscribe(user => this.currentUser = user);
  }

  save(): void {
    const service: Service = {
      type: this.servicesForm.value['type'],
      price: this.servicesForm.value['price'],
      state: 'ACTIVE',
      startDate: this.servicesForm.value['dateRange']['start'],
      endDate: this.servicesForm.value['dateRange']['end'],
      userId: this.currentUser.id,
      species: this.servicesForm.value['species'],
      additionalInfo: this.servicesForm.value['additionalInfo']
    };

    this.servicesService
      .addService(service)
      .subscribe(
        () => this.router.navigate(['services']),
        err => { console.error(err); alert('Ocorreu um erro') }
      );
  }

  cancel(): void {
    this.router.navigate(['services']);
  }
}
