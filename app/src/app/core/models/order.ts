import { Pet } from './pet';
import { Address } from './address';
import { User } from './user';
import { Service } from './service';

export interface Order {
  id?: number,
  addressId?: number,
  address?: Address,
  createdDate?: Date,
  eventDate: Date,
  petId: number,
  pet?: Pet,
  serviceId: number,
  service?: Service,
  state?: string,
  stateLabel?: string,
  totalValue?: number,
}
