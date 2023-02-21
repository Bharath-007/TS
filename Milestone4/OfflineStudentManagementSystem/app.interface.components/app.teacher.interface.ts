import { IUser } from './app.user.interface'

export interface ITeacher extends IUser {
    className: string;
    password: string;
}