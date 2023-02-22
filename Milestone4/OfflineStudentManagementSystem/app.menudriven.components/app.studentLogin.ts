import { menuDriven, studentInstance } from "../app"
import { Student } from "../app.class.components/app.student.class"
import { Teacher } from "../app.class.components/app.teacher.class"
import { questionAsync } from "./app.staffRegister"

export const studentLogin = async () => {
    Teacher.isActive = false;
    const rollNo = Number(await questionAsync('Enter Roll Number : '))
    const dob = await questionAsync('Enter DOB(DD/MM/YYYY) : ');
    const result = validateRollNo(rollNo, dob)
    if (result) {
        console.log(`\n\tName\t:\t${result?.name}\n
        \tRollNo\t:\t${result?.rollNo}\n
        \tMark 1\t:\t${result?.detail?.mark1}\n
        \tMark 2\t:\t${result?.detail?.mark2}\n
        \tMark 3\t:\t${result?.detail?.mark3}\n
        \tTotal\t:\t${result?.detail?.total}\n
        \tGrade\t:\t${result?.detail?.grade}\n`);3
        menuDriven();
    } else {
        console.log(`\nInvalid Student credentials\n`);
        studentLogin();
    }
}

const validateRollNo = (rollNo: number, dob: string): any => {
    return Student.students.find((student) => {
        if (student.rollNo === rollNo && student.dob === dob) {
            return true;
        } else {
            return false;
        }
    });
}
