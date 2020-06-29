import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/core/models/service';
import { ServicesService } from '../services.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from 'src/app/core/auth/token.service';
import { OrdersService } from 'src/app/orders/orders.service';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss'],
})
export class ServicesDetailsComponent implements OnInit {
  service: Service;
  selected: Date;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService,
    private tokenService: TokenService,
    private ordersService: OrdersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.servicesService
        .getService(params['id'])
        .subscribe((service) => (this.service = service));
    });
  }

  onDateSelect(ngbDate: NgbDate) {
    if (this.isRange(ngbDate)) {
      this.selected = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    }
  }

  isRange(ngbDate: NgbDate) {
    const date = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    const start = new Date(this.service?.startDate);
    const end = new Date(this.service?.endDate);

    return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
  }

  isSelected(ngbDate: NgbDate) {
    return this.selected && this.selected.getTime() === new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day).getTime();
  }

  schedule() {

    if (!this.selected) {
      alert('Selecione uma data valida!');
    }

    if (!this.tokenService.hasToken()) {
      alert('É preciso realizer o login!');
      this.router.navigate(
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
        eventDate: this.selected,
        serviceId: this.service.id
      })
      .subscribe(
        () => this.router.navigate(['services']),
        err => console.error(err)
      );
  }
}
