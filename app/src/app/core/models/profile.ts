import { User } from './user';
import { Pet } from 'src/app/pets/pet';
import { Order } from './order';

export interface Profile {
  user: User,
  pets: Pet[],
  clientOrders: Order[],
  providerOrders: Order[]
}
