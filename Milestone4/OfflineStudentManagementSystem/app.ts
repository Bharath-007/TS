import { CreatorFactory } from "./app.factory.components/app.creator.factory";
import { staffRegister } from "./app.menudriven.components/app.staffRegister";
import * as readline from 'readline';
import { addStudent } from './app.menudriven.components/app.addStudent'
import { addStudentDetails } from "./app.menudriven.components/app.addStudentDetails";
import { Teacher } from "./app.class.components/app.teacher.class";
import { Student } from "./app.class.components/app.student.class";
import { User } from "./app.enum.components/app.user.enum";
import { viewStudentByID } from "./app.menudriven.components/app.viewStudentByID";
import { deleteByID } from "./app.menudriven.components/app.deleteByID";
import { updateStudentDetails } from "./app.menudriven.components/app.updateDetails";

export const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const teacherInstance = CreatorFactory.createUser('teacher');
export const studentInstance = CreatorFactory.createUser('student');



const teac = Teacher.teacher({
    name: 'sfatt1',
    id: 1234,
    password: 'hekllowerld',
    className: '8th',
    type: User.teacher
})

const stu2 = Student.student({
    name: 'sanjay',
    id: 11,
    rollNo: 34334,
    dob: '23/3/2005',
    type: User.student
})

const stu1 = Student.student({
    type: 'student',
    name: 'bharath',
    id: 12,
    rollNo: 234,
    dob: '23/3/2002',

})


// console.log(studentInstance.getData());



const showMenu = () => {
    console.log('1.Register Staff');
    console.log('2.Add student');
    console.log('3.Teachers List');
    console.log('4.Students List');
    console.log('5.Add student details');
    console.log('6.updateStudent details');
    console.log('7.Delete student');
    console.log('8.View Student by ID');
    console.log('10. Exit');
}


export const menuDriven = () => {
    readLine.question('Enter your choice: ', (choice) => {
        // console.log(`Choice ${choice}`);
        switch (Number(choice)) {
            case 1:
                staffRegister();
                menuDriven();
                break;
            case 2:
                const invalidData: string = "\nNo teacher exist Register as a Teacher";
                if (teacherInstance.length() !== 0) {
                    addStudent();
                } else {
                    staffRegister();
                    console.log(invalidData);
                }
                menuDriven();
                break;
            case 3:
                console.log(teacherInstance.getData());
                menuDriven();
                break;
            case 4:
                console.log(studentInstance.getData());
                menuDriven();
                break;
            case 5:
                addStudentDetails();
                menuDriven();
                break;
            case 6:
                updateStudentDetails();
                menuDriven();
                break;
            case 7:
                deleteByID();
                menuDriven();
                break;
            case 8:
                viewStudentByID();
                menuDriven();
                break;
            case 9:
                console.log('Exiting...');
                readLine.close();
                break;
            default:
                console.log('Invalid choice');
                menuDriven();
                break;
        }
    });
}
showMenu();
menuDriven();


// readLine.close();