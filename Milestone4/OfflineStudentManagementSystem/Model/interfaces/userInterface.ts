import { User } from '../enum/enumUser';

export interface IUser {
  id?: number;
  name: string;
  type?: User.student | User.teacher | string;
}
