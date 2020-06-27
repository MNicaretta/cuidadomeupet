import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../core/models/order';

const API_URL = '/api/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  addOrder(order: Order) {
    return this.http.post<Order>(API_URL, order);
  }
}
