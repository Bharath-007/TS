import { IStudent } from '../interfaces/studentInterface'
import { IStudentDetails } from '../interfaces/studentDetailsInterface';

export class Student {
    static students: IStudent[] = [];
    static student(staff: IStudent) {
        return this.students.push({
            name: staff.name,
            id: staff.id,
            rollNo: staff.rollNo,
            dob: staff.dob,
            detail: staff.detail,
            // type:'student'
        });
    }
    static studentDetails(details: IStudentDetails, rollNo: number) {
        this.students.filter((student) => {
            if (student.rollNo === rollNo)
                student.detail = details;
        })
    }
    static updateStudent(updateDetails: IStudentDetails, rollNo: number) {
        this.students.map((student) => {
            if (student.rollNo === rollNo)
                student.detail = updateDetails
        })
    }
    getData() {
        Student.students.forEach((student) => {
            console.log(`\tStudent Name : ${student.name.toUpperCase()}\tRoll No : ${student.rollNo}`);
        });
    }

}