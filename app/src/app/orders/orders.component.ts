import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../core/models/order';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @Input() orders: Order[]
  @Input() clientType: boolean = false;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
  }

  getUser(order: Order) {
    if (this.clientType) {
      return order.serviceUser;
    } else {
      return order.userName;
    }
  }

  approve(order: Order) {
    order.state = 'APPROVED';
    this.orderService
      .updateOrder(order)
      .subscribe(result => Object.assign(order, result));
  }

  reprove(order: Order) {
    order.state = 'CANCELED';
    this.orderService
      .updateOrder(order)
      .subscribe(result => Object.assign(order, result));
  }

  finish(order: Order) {
    order.state = 'FINISHED';
    this.orderService
      .updateOrder(order)
      .subscribe(result => Object.assign(order, result));
  }
}
