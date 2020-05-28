import { User } from './user';
import { Pet } from 'src/app/pets/pet';

export interface Profile {
  user: User,
  pets: Pet[]
}
