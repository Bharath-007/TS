import { IUser } from './app.user.interface'

export interface ITeacher extends IUser {
    password: string;
}