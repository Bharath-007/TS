import { ITeacher } from '../app.interface.components/app.teacher.interface'

export class Teacher {
    static teachers: Object[] = [];
    static teacher(staff: ITeacher) {//static allows us to use fields and methods without creating instace of class
        return this.teachers.push({
            name: staff.name,
            id: staff.id,
            password: staff.password,
            className: staff.className
        })
    }

    length(): number {
        return Teacher.teachers.length;
    }

    getData(): Object[] {
        return Teacher.teachers;
    }
}