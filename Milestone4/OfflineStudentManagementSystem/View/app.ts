import { CreatorFactory } from '../Control/factoryComponents/creatorFactory';
import { studentLogin } from '../Control/services/studentServices';
import {readLine} from '../Control/util/utils'
import { staffLogin, addStudent, addStudentDetails, viewStudentByID, deleteByID, updateStudentDetails } from '../Control/services/staffServices';
import { Teacher } from '../Control/factoryComponents/teacher';
import { Student } from '../Control/factoryComponents/student';

export const teacherInstance = CreatorFactory.createUser('teacher');
export const studentInstance = CreatorFactory.createUser('student');
export const studentListener = Student.getInstance(); //singleton object for student
export const teacherListener = Teacher.getInstance(); //singleton object for teacher
/*
const stu2 = studentListener.studentSetter({
  name: 'Bharath',
  id: 123,
  rollNo: 23001,
  dob: '23/02/2002',
});

const stu1 = studentListener.studentSetter({
  name: 'Arun',
  id: 124,
  rollNo: 23000,
  dob: '02/02/2002',
});
const stu3 = studentListener.studentSetter({
  name: 'Akash',
  id: 125,
  rollNo: 23002,
  dob: '24/12/2001',
});

*/

const showMenu = () => {
  console.log('1.Staff Login');
  console.log('2.Student Login');
  console.log('10. Exit');
};

export const staffOperations = () => {
  console.log('3.Add student');
  console.log('4.Teachers List');
  console.log('5.Students List');
  console.log('6.Add student details');
  console.log('7.updateStudent details');
  console.log('8.Delete student');
  console.log('9.View Student by ID');
  console.log('11.Back');
};

export const menu = () => {
  readLine.question('Enter your choice: ', (choice) => {
    // console.log(`Choice ${choice}`);
    switch (Number(choice)) {
      case 1:
        staffLogin();
        staffMenu();
        break;
      case 2:
        if (Student.instanceOfStudent.students.length !== 0) {
          studentLogin();
        } else {
          console.log('-----DATABASE IS EMPTY LOGIN LATER-----');
        }
        menu();
        break;
      case 10:
        console.log('Exsisting...');
        readLine.close();
        break;
      default:
        console.log('Invalid choice');
        menu();
        break;
    }
  });
};

export const staffMenu = () => {
  readLine.question('Enter Staff choices:', (choice) => {
    switch (Number(choice)) {
      case 3:
        addStudent();
        staffMenu();
        break;
      case 4:
        console.log(teacherInstance.getData());
        staffMenu();
        break;
      case 5:
        if (!studentListener.isEmpty()) {
          console.log('Student Database is Empty');
        } else {
          studentInstance.getData();
        }
        staffMenu();
        break;
      case 6:
        if (!studentListener.isEmpty()) {
          console.log('Student Database is Empty Add students to add details');
        } else {
          addStudentDetails();
        }
        staffMenu();
        break;
      case 7:
        if (!studentListener.isEmpty()) {
          console.log('Student Database is Empty Add students to add details');
        } else {
          updateStudentDetails()
        };
        staffMenu();
        break;
      case 8:
        if (!studentListener.isEmpty()) {
          console.log('Student Database is Empty Add students to Delete');
        } else {
          deleteByID();
        };
        staffMenu();
        break;
      case 9:
        if (!studentListener.isEmpty()) {
          console.log('Student Database is Empty Add students to View');
        } else {
          viewStudentByID();
        };
        staffMenu();
        break;
      case 11:
        console.log('Back');
        menu();
        break;
      default:
        console.log('Invalid Choice');
        menu();
        break;
    }
  });
};

showMenu();
menu();

// readLine.close();
