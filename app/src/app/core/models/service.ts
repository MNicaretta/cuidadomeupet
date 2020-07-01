import { Pet } from './pet';
import { Evaluation } from './evaluation';
import { Address } from './address';
import { User } from './user';

export interface Service {
  id?: number,
  additionalInfo?: string,
  addressId?: number,
  address?: Address,
  availablePets?: Pet[],
  availableAddresses?: Address[],
  distance?: number,
  endDate: Date,
  evaluations?: Evaluation[],
  price: number,
  schedulable?: boolean,
  species: string[],
  speciesLabels?: string[],
  startDate: Date,
  state: string,
  type: string,
  typeLabel?: string,
  userId: number,
  user?: User,
}
