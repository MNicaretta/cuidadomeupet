import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

import { Service } from 'src/app/core/models/service';
import { TokenService } from 'src/app/core/auth/token.service';
import { OrdersService } from 'src/app/orders/orders.service';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss'],
})
export class ServicesDetailsComponent implements OnInit {

  service: Service;

  selectedDate: Date;
  orderForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private tokenService: TokenService,
    private ordersService: OrdersService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service = this.route.snapshot.data.service;

      this.orderForm = this.formBuilder.group({
        pet: [
          0,
          [
            Validators.required,
            Validators.min(1),
          ]
        ],
        address: [
          this.service.type === 'SITTING' ? 0 : null,
          this.service.type === 'SITTING' ? [
            Validators.required,
            Validators.min(1),
          ] : null
        ],
      });
    });
  }

  onDateSelect(ngbDate: NgbDate) {
    if (this.isRange(ngbDate)) {
      this.selectedDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    }
  }

  isRange(ngbDate: NgbDate) {
    const date = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    const start = new Date(this.service?.startDate);
    const end = new Date(this.service?.endDate);

    return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
  }

  isSelected(ngbDate: NgbDate) {
    return this.selectedDate && this.selectedDate.getTime() === new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day).getTime();
  }

  validDate() {
    return this.selectedDate && this.selectedDate.getTime() >= new Date().getTime();
  }

  schedule() {

    if (!this.validDate()) {
      return alert('Selecione uma data valida!');
    }

    if (!this.tokenService.hasToken()) {
      alert('É preciso realizar o login!');
      return this.router.navigate(
        ['signin'],
        {
          queryParams: {
            returnUrl: this.route.url
          }
        }
      );
    }

    this.ordersService
      .addOrder({
        eventDate: this.selectedDate,
        petId: this.orderForm.value.pet,
        addressId: this.orderForm.value.address,
        serviceId: this.service.id
      })
      .subscribe(
        () => this.router.navigate(['services']),
        err => { console.error(err); alert('Ocorreu um erro') }
      );
  }
}
