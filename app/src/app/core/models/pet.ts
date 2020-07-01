import { User } from './user';

export interface Pet {
  id?: number,
  name?: string,
  species?: string,
  speciesLabel?: string,
  additionalInfo?: string,
  userId?: number,
  user?: User
}
