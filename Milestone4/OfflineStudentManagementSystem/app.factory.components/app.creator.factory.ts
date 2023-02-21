import { ITeacher } from "../app.interface.components/app.teacher.interface";
import { IStudent } from '../app.interface.components/app.student.interface';
import { Teacher } from '../app.class.components/app.teacher.class'
import { Student } from '../app.class.components/app.student.class'
import { IUser } from "../app.interface.components/app.user.interface";

type Constructor<T> = { new(): T }//inline type to capture this

export class CreatorFactory {
    static createUser<T>(user: T) {
        const userName = <string>user;
        switch (userName.toLowerCase()) {
            case 'student':
                return new Student();
            case 'teacher':
                return new Teacher();
            default:
                throw new Error('Invalid UserName');
        }
    }
}