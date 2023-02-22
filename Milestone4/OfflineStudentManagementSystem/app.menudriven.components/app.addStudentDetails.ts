import { Student } from '../app.class.components/app.student.class';
import { questionAsync } from '../app.menudriven.components/app.staffRegister'
import { menuDriven } from '../app';
import { Teacher } from '../app.class.components/app.teacher.class';


export const addStudentDetails = async () => {
    try {
        if (Teacher.isActive) {
            const getRollNo = Number(await questionAsync('Enter Roll No to add details : '))
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
                Student.studentDetails(studentDetails, getRollNo);
                console.log(`\tDetails Added Succesfully\t`);
                return menuDriven();
            } else {
                console.log('Roll Number not Found');
                return menuDriven();
            }
        } else {
            console.log(`\tOnly Staff can Add the details\t`);
            return menuDriven();
        }
    } catch (err) {
        console.log(err);
    }
}

export const calculateGrade = (total: number): string => {
    if (total >= 285) {
        return 'O';
    } else if (total >= 250 && total <= 285) {
        return 'A'
    } else if (total >= 200 && total <= 250) {
        return 'B'
    } else if (total >= 150 && total <= 100) {
        return 'C'
    } else {
        return 'Fail'
    }
}

export const checkIsExist = async (rollNo: number) => {
    return Student.students.some((studentRollNo) => {
        return studentRollNo.rollNo === rollNo;
    })
}
