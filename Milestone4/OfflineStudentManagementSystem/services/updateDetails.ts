import { instantStudent, menuDriven, menuDriven1 } from "../app";
import { Student } from "../factoryComponents/student";
import { Teacher } from '../factoryComponents/teacher';
import { calculateGrade, checkIsExist } from "./addStudentDetails";
import { questionAsync } from "./staffRegister"

export const updateStudentDetails = async () => {
    try {
        const getRollNo = Number(await questionAsync('Enter student Roll no to update : '));
        const isExist = checkIsExist(getRollNo);
        if (await isExist) {
            const mark1 = Number(await questionAsync('Enter mark 1 : '));
            const mark2 = Number(await questionAsync('Enter mark 2 : '));
            const mark3 = Number(await questionAsync('Enter mark 3 : '));
            const total = mark1 + mark2 + mark3;
            const grade: string = calculateGrade(total);
            const studentDetails = {
                mark1,
                mark2,
                mark3,
                total,
                grade
            }
            instantStudent.updateStudentSetter(studentDetails, getRollNo);
            console.log('Updated successfully');
            return menuDriven1();
        } else {
            console.log('No Student with the roll no');
            updateStudentDetails();
        }
    } catch (err) {
        console.log(err);

    }
}

