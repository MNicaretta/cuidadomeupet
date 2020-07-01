import { User } from './user';
import { Pet } from 'src/app/core/models/pet';
import { Order } from './order';
import { Address } from './address';

export interface Profile {
  user: User,
  pets: Pet[],
  addresses: Address[],
  clientOrders: Order[],
  providerOrders: Order[]
}
