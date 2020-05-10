import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.scss']
})
export class ServicesFormComponent implements OnInit {

  servicesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servicesService: ServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicesForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required]
      ],
      additionalInfo: [
        ''
      ]
    });
  }

  save(): void {
    const service = { ...this.servicesForm.value, userId: 2 } as Service;

    this.servicesService
      .addService(service)
      .subscribe(
        (value) => this.router.navigate(['services']),
        err => console.error(err)
      );
  }

  cancel(): void {
    this.router.navigate(['services']);
  }

}
