import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../core/models/order';
import { OrdersService } from './orders.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserPopupComponent } from './user-popup/user-popup.component';
import { PetPopupComponent } from './pet-popup/pet-popup.component';
import { AddressPopupComponent } from './address-popup/address-popup.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @Input() orders: Order[]
  @Input() clientType: boolean = false;

  evaluationOrder: Order;

  constructor(
    private orderService: OrdersService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  viewUser(order: Order) {
    const user = this.clientType ? order.service.user : order.pet.user;

    const modal = this.modalService.open(UserPopupComponent);
    modal.componentInstance.user = user;
  }

  viewPet(order: Order) {
    const pet = order.pet;

    const modal = this.modalService.open(PetPopupComponent);
    modal.componentInstance.pet = pet;
  }

  viewAddress(order: Order) {
    const address = order.service.type === 'SITTING' ? order.address : order.service.address;

    const modal = this.modalService.open(AddressPopupComponent);
    modal.componentInstance.address = address;
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
    this.evaluationOrder = order;
  }

  showEvaluationForm(order: Order) {
    return this.evaluationOrder === order;
  }

  doFinish(order: Order, finish: boolean) {
    this.evaluationOrder = null;

    if (finish) {
      order.state = 'FINISHED';
      this.orderService
        .updateOrder(order)
        .subscribe(result => Object.assign(order, result));
    }
  }
}
