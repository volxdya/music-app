import { User } from '../modules/user/user.model';

export interface IUpdate {
  value: string;
  key: keyof User;
}
