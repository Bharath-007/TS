import { User } from '../enum/user.enum';

export interface IUser {
  id?: number;
  name: string;
  type?: User.student | User.teacher | string;
}
