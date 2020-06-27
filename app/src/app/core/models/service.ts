import { EnumMap } from './enum-map';

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
  species: EnumMap[]
}

export interface ServiceWrapper {
  service: Service,
  userName: string,
  serviceType: string,
  species: string[]
}

