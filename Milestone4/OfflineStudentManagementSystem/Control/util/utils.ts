import { teacherListener, studentListener, staffMenu } from '../../View/app';
import { addStudent, staffLogin, } from '../services/staffServices';
import * as readline from 'readline';
import * as util from 'util';
import { Teacher } from '../factoryComponents/teacher';
import { stringify } from 'querystring';

export const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// export const questionAsync = (prompt: string): Promise<string> => {
//     return new Promise((res) => {
//         readLine.question(prompt, (answer: string) => {
//             res(answer);
//         });
//     });
// };

export const questionAsync = async (prompt: string) => {
    const answer = await new Promise<string>(res => {
        readLine.question(prompt, (data: string) => res(data));
    });
    return answer;
}

export const errorReport = ({ message }: { message: string }) => {
    console.log(message);
}

export const isValideDate = (dob: string): string => {
    const dateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    if (dob.match(dateRegex)) {
        return 'valid';
    } else {
        return 'invalid';
    }
};

export const validateRollNo = (rollNo: number, dob: string): any => {
    return studentListener.students.find((student) => {
        if (student.rollNo === rollNo && student.dob === dob) {
            return true;
        } else {
            return false;
        }
    });
};

export const checkIsExist = async (rollNo: number) => {
    return studentListener.students.some((studentRollNo) => {
        return studentRollNo.rollNo === rollNo;
    });
};

export const validateStaffLogin = (userName: string, password: string) => {
    try {
        if (
            userName !== teacherListener.teacher.name &&
            password !== teacherListener.teacher.password
        ) {
            throw new Error('Invalid Staff login');
        } else if (
            userName === teacherListener.teacher.name &&
            password !== teacherListener.teacher.password
        ) {
            Teacher.instanceOfTeacher.isActive = false;
            throw new Error('Invalid password');
        } else {
            console.log('-----Staff Login Successfull-----');
            Teacher.instanceOfTeacher.isActive = true;
            // staffOperations();
        }
    } catch (err) {
        let message;
        if (err instanceof Error) {
            message = err.message
        } else {
            message = String(err);
        }
        errorReport({ message })
        staffLogin();
    }
};

export const validateuserDetails = (id: number, name: string, rollNo: number, dob: string): boolean | undefined => {
    const nameRegex = /^[a-zA-Z]{2,10}$/;
    try {
        if (isNaN(id)) {
            throw new Error('ID must be a number');
        } else if (!name.match(nameRegex)) {
            throw new Error('Student Name should contain atleat 2 characters');
        } else if (isNaN(rollNo)) {
            throw new Error(`Roll Number must be a number`);
        } else if (isValideDate(dob) !== 'valid') {
            throw new Error('date not in correct format of MM/dd/YYYY');
        } else {
            console.log(`Student Added Successfully`);
        }
        return true;
    } catch (err) {
        let message;
        if (err instanceof Error) {
            message = err.message
        } else {
            message = String(err);
        }
        errorReport({ message });
        addStudent();
    }
};