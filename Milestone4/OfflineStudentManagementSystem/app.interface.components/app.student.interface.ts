import { IStudentDetails } from './app.studentDetails.interface';
import {IUser} from './app.user.interface'

export interface IStudent extends IUser{
    rollNo:number;
    dob:string;
    detail?:IStudentDetails
}