import { Order } from './order';

export interface Evaluation {
  id?: number,
  commentaries: string,
  grade: number,
  orderId: number,
  order?: Order,
}
