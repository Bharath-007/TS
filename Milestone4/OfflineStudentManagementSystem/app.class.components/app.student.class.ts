import { IStudent } from '../app.interface.components/app.student.interface'
import { ITeacher } from '../app.interface.components/app.teacher.interface'
import { IStudentDetails } from '../app.interface.components/app.studentDetails.interface';

export class Student {
    static students: IStudent[] = [];
    static student(staff: IStudent) {//static allows us to use fields and methods without creating instace of class
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
    static updateStudent(updateDetails:IStudentDetails,rollNo:number){
        this.students.map((student)=>{
            if(student.rollNo === rollNo)
                student.detail = updateDetails
        })
    }
    length(): number {
        return Student.students.length;
    }
    getData(): Object[] {
        return Student.students;
    }

}