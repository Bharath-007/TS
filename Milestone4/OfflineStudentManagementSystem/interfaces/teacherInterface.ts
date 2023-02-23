import { IUser } from './userInterface'

export interface ITeacher extends IUser {
    password: string;
}