import { IStudentDetails } from './studentDetailsInterface';
import {IUser} from './userInterface'

export interface IStudent extends IUser{
    rollNo:number;
    dob:string;
    detail?:IStudentDetails
}