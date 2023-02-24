import { menuDriven } from './app';
import { Student } from './factoryComponents/student';
import { questionAsync } from './services/staffRegister';

export const addStudent = async () => {
  try {
    const type = 'student';
    const id = Number(await questionAsync('Enter Student ID : '));
    const name = await questionAsync('Enter Student Name : ');
    const rollNo = Number(await questionAsync('Enter Studdent Roll No : '));
    const dob = await questionAsync('Enter Student DOB : ');
    validateuserDetails(id, name, rollNo, dob);
    const student = {
      type,
      id,
      name,
      rollNo,
      dob,
    };
    Student.student(student);
    return menuDriven();
  } catch (err) {
    console.log(err);
  }
};

const validateuserDetails = (
  id: number,
  name: string,
  rollNo: number,
  dob: string
) => {
  const nameRegex = '^[A-Za-z\\s]+$';

  if (isNaN(id)) {
    console.log('ID must be a number');
    addStudent();
  } else if (!name.match(nameRegex)) {
    console.log('Enter proper student name');
    addStudent();
  } else if (isNaN(rollNo)) {
    console.log(`Roll Number must be a number`);
    addStudent();
  } else if (isValideDate(dob) === 'invalid') {
    console.log('date not in correct format of MM/dd/YYYY');
    addStudent();
  } else {
    console.log(`Student Added Successfully`);
  }
};

const isValideDate = (dob: string): string => {
  const dateRegex =
    '/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/';
  if (dateRegex.match(dob)) {
    return 'valid';
  } else {
    return 'invalid';
  }
};
