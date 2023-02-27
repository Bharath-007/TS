import { IStudentDetails } from '../interfaces/studentDetails.interface';
import { IUser } from './user.interface';

export interface IStudent extends IUser {
  rollNo: number;
  dob: string;
  detail?: IStudentDetails;
}
