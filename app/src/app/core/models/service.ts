import { Pet } from 'src/app/pets/pet';

export interface Service {
  id?: number,
  additionalInfo?: string,
  availablePets?: Pet[],
  distance?: number,
  endDate: Date,
  price: number,
  species: string[],
  speciesLabels?: string[],
  startDate: Date,
  state: string,
  type: string,
  typeLabel?: string,
  userId: number,
  userName?: string,
}
