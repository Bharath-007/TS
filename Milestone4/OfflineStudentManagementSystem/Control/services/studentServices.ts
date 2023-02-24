import { instantStudent,menu } from '../../View/app';
import { Teacher } from '../../Model/factoryComponents/teacher';
import { errorReport } from '../util/utils';
import { questionAsync } from './staffServices';

export const studentLogin = async () => {
  try {
    Teacher.instanceOfTeacher.isActive = false;
    const rollNo = Number(await questionAsync('Enter Roll Number : '));
    const dob = await questionAsync('Enter DOB(DD/MM/YYYY) : ');
    const result = validateRollNo(rollNo, dob);
    if (result) {
      console.log(`\n
        \tName\t:\t${result?.name}
        \tRollNo\t:\t${result?.rollNo}
        \tMark 1\t:\t${result?.detail?.mark1}
        \tMark 2\t:\t${result?.detail?.mark2}
        \tMark 3\t:\t${result?.detail?.mark3}
        \tTotal\t:\t${result?.detail?.total}
        \tGrade\t:\t${result?.detail?.grade}\n`);
      menu();
    } else {
      throw new Error(`\nInvalid Student credentials\n`);
    }
  } catch (err) {
    let message;
    if (err instanceof Error) {
      message = err.message;
    } else {
      message = String(err);
    }
    errorReport({ message });
    studentLogin();
  }
}

const validateRollNo = (rollNo: number, dob: string): any => {
  return instantStudent.students.find((student) => {
    if (student.rollNo === rollNo && student.dob === dob) {
      return true;
    } else {
      return false;
    }
  });
};
