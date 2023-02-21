import { menuDriven } from "../app";
import { Student } from "../app.class.components/app.student.class";
import { calculateGrade, checkIsExist } from "./app.addStudentDetails";
import { questionAsync } from "./app.staffRegister"

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
            Student.updateStudent(studentDetails,getRollNo);
            console.log('Updated successfully');
            return menuDriven();
        }
    }catch(err){
        console.log(err);
        
    }
}

