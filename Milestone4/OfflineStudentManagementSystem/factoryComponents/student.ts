import { IStudent } from '../interfaces/studentInterface'
import { IStudentDetails } from '../interfaces/studentDetailsInterface';

export class Student {
    students: IStudent[] = [];
    public static instanceOfStudent: Student;

    private constructor() { }

    public static getInstance(): Student {
        if (!Student.instanceOfStudent) {
            Student.instanceOfStudent = new Student();
        }
        return Student.instanceOfStudent;
    }

    public studentSetter(staff: IStudent) {
        return this.students.push({
            name: staff.name,
            id: staff.id,
            rollNo: staff.rollNo,
            dob: staff.dob,
            detail: staff.detail,
            // type:'student'
        });
    }
    public studentDetails(details: IStudentDetails, rollNo: number) {
        this.students.filter((student) => {
            if (student.rollNo === rollNo)
                student.detail = details;
        })
    }
    public updateStudentSetter(updateDetails: IStudentDetails, rollNo: number) {
        this.students.map((student) => {
            if (student.rollNo === rollNo)
                student.detail = updateDetails
        })
    }
    getData() {
        this.students.forEach((student) => {
            console.log(`\tStudent Name : ${student.name.toUpperCase()}\tRoll No : ${student.rollNo}`);
        });
    }

}