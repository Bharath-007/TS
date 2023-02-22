import { User } from '../app.enum.components/app.user.enum'

export interface IUser {
    id?: number;
    name: string;
    type?: User.student | User.teacher | string ;
}