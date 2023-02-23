import { ITeacher } from '../interfaces/teacherInterface'

export class Teacher {
    static isActive = false;
    static teacher = {
        name:'Admin',
        password:'Admin@123'
    }
    // constructor(isActive:boolean,teacher:ITeacher){
    //     this.isActive = isActive;
    //     this.teacher = teacher;
    // }
    getData(): Object {
        return Teacher.teacher;
    }
}