import { Species } from './species';

export interface Service {
  id?: number,
  type: string,
  price: number,
  distance?: number,
  additionalInfo?: string,
  state: string,
  startDate: Date,
  endDate: Date,
  userId: number,
  species: Species[]
}
