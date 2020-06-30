import { Pet } from 'src/app/pets/pet';

export interface Order {
  id?: number,
  createdDate?: Date,
  eventDate: Date,
  petId: number,
  pet?: Pet,
  serviceId: number,
  serviceUser?: string,
  state?: string,
  stateLabel?: string,
  totalValue?: number,
  userId?: number,
  userName?: string
}
