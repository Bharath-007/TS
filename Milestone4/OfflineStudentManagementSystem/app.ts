import { CreatorFactory } from "./factoryComponents/creatorFactory";
import { staffLogin } from "./services/staffRegister";
import * as readline from 'readline';
import { addStudent } from './services/addStudent'
import { addStudentDetails } from "./services/addStudentDetails";
import { Teacher } from "./factoryComponents/teacher"
import { Student } from "./factoryComponents/student";
import { User } from "./enum/app.user.enum";
import { viewStudentByID } from "./services/viewStudentByID";
import { deleteByID } from "./services/deleteByID";
import { updateStudentDetails } from "./services/updateDetails";
import { studentLogin } from "./services/studentLogin";

export const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const teacherInstance = CreatorFactory.createUser('teacher');
export const studentInstance = CreatorFactory.createUser('student');

export const instantStudent = Student.getInstance();//singleton object for student
export const instantTeacher = Teacher.getInstance();//singleton object for teacher

const stu2 = instantStudent.studentSetter({
    name: 'Bharath',
    id: 123,
    rollNo: 23001,
    dob: '23/02/2002',
})

const stu1 = instantStudent.studentSetter({
    name: 'Arun',
    id: 124,
    rollNo: 23000,
    dob: '02/02/2002',
})
const stu3 = instantStudent.studentSetter({
    name: 'Akash',
    id: 125,
    rollNo: 23002,
    dob: '24/12/2001',
})
// console.log(studentInstance.getData());

const showMenu = () => {
    console.log('1.Staff Login');
    console.log('2.Student Login');
    console.log('10. Exit');
}

export const showMenu2 = () => {
    console.log('3.Add student');
    console.log('4.Teachers List');
    console.log('5.Students List');
    console.log('6.Add student details');
    console.log('7.updateStudent details');
    console.log('8.Delete student');
    console.log('9.View Student by ID');
    console.log('11.Back');
}


export const menuDriven = () => {
    readLine.question('Enter your choice: ', (choice) => {
        // console.log(`Choice ${choice}`);
        switch (Number(choice)) {
            case 1:
                staffLogin();
                menuDriven1();
                break;
            case 2:
                if (Student.instanceOfStudent.students.length !== 0) {
                    studentLogin();
                } else {
                    console.log('-----DATABASE IS EMPTY LOGIN LATER-----');
                }
                menuDriven();
                break;
            case 10:
                console.log('Exsisting...');
                readLine.close();
                break;
            default:
                console.log('Invalid choice');
                menuDriven();
                break;
        }
    });
}


export const menuDriven1 = () => {
    readLine.question('Enter Staff choices:', (choice) => {
        switch (Number(choice)) {
            case 3:
                addStudent();
                menuDriven1();
                break;
            case 4:
                console.log(teacherInstance.getData());
                menuDriven1();
                break;
            case 5:
                studentInstance.getData();
                menuDriven1();
                break;
            case 6:
                addStudentDetails();
                menuDriven1();
                break;
            case 7:
                updateStudentDetails();
                menuDriven1();
                break;
            case 8:
                deleteByID();
                menuDriven1();
                break;
            case 9:
                viewStudentByID();
                menuDriven1();
                break;
            case 11:
                console.log('Back');
                menuDriven();
                break;
            default:
                console.log('Invalid Choice');
                menuDriven1();
                break;
        }
    })
}

// export const menuDriven2 = () => {
//     readLine.question('Enter Staff choices:', (choice) => {
//         switch (Number(choice)) {
//             case 3:
//                 addStudent();
//                 menuDriven();
//                 break;
//             case 4:
//                 if (Teacher.instanceOfTeacher.isActive) {
//                     console.log(teacherInstance.getData());
//                     menuDriven();
//                 } else {
//                     console.log(`Only Teachers can view this`);
//                     menuDriven();
//                 }
//                 break;
//             case 5:
//                 studentInstance.getData();
//                 menuDriven();
//                 break;
//             case 6:
//                 addStudentDetails();
//                 menuDriven();
//                 break;
//             case 7:
//                 updateStudentDetails();
//                 menuDriven();
//                 break;
//             case 8:
//                 deleteByID();
//                 menuDriven();
//                 break;
//             case 9:
//                 viewStudentByID();
//                 menuDriven();
//                 break;
//             case 10:
//                 console.log('Exiting...');
//                 readLine.close();
//                 break;
//             default:
//                 console.log('Invalid Choice');
//                 menuDriven1();
//                 break;
//         }
//     })
// }


showMenu();
menuDriven();


// readLine.close();