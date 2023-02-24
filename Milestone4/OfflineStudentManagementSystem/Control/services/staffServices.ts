import { instantStudent, staffMenu} from '../../View/app';
import { Teacher } from '../../Model/factoryComponents/teacher';
import { menu, staffOperations } from '../../View/app';
import { validateStaffLogin, checkIsExist, validateuserDetails, readLine , validateRollNo, errorReport } from '../util/utils'

export const questionAsync = (prompt: string): Promise<string> => {
  return new Promise((res) => {
    readLine.question(prompt, (answer: string) => {
      res(answer);
    });
  });
};

export const staffLogin = async () => {
  try {
    const type = 'teacher';
    const name = await questionAsync('Enter staff name: ');
    const password = await questionAsync('Enter staff password: ');
    validateStaffLogin(name, password);
    Teacher.instanceOfTeacher.isActive = true;
    if (Teacher.instanceOfTeacher.isActive) {
      staffOperations();
    } else {
      throw new Error('Not logged In')
    }
    return staffMenu();
  } catch (err) {
    let message;
    if (err instanceof Error) {
      message = err.message;
    } else {
      message = String(message);
    }
    reportError({ message })
  }
};

export const addStudentDetails = async () => {
  try {
    if (Teacher.instanceOfTeacher.isActive) {
      const getRollNo = Number(
        await questionAsync('Enter Roll No to add details : ')
      );
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
          grade,
        };
        instantStudent.updateStudentSetter(studentDetails, getRollNo);
        console.log(`\tDetails Added Succesfully\t`);
        return staffMenu();
      } else {
        console.log('Roll Number not Found');
        return staffMenu();
      }
    } else {
      console.log(`\tOnly Staff can Add the details\t`);
      return menu();
    }
  } catch (err) {
    console.log(err);
  }
};

export const calculateGrade = (total: number): string => {
  if (total >= 285) {
    return 'O';
  } else if (total >= 250 && total <= 285) {
    return 'A';
  } else if (total >= 200 && total <= 250) {
    return 'B';
  } else if (total >= 150 && total <= 100) {
    return 'C';
  } else {
    return 'Fail';
  }
};

export const updateStudentDetails = async () => {
  try {
    const getRollNo = Number(
      await questionAsync('Enter student Roll no to update : ')
    );
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
        grade,
      };
      instantStudent.updateStudentSetter(studentDetails, getRollNo);
      console.log('Updated successfully');
      return staffMenu();
    } else {
      console.log('No Student with the roll no');
      updateStudentDetails();
    }
  } catch (err) {
    console.log(err);
  }
};

export const addStudent = async () => {
  try {
    const type = 'student';
    const id = Number(await questionAsync('Enter Student ID : '));
    const name = await questionAsync('Enter Student Name : ');
    const rollNo = Number(await questionAsync('Enter Studdent Roll No : '));
    const dob = await questionAsync('Enter Student DOB(MM/dd/YYYY) : ');
    if (validateuserDetails(id, name, rollNo, dob)) {
      const student = {
        type,
        id,
        name,
        rollNo,
        dob,
      };
      instantStudent.studentSetter(student);
      staffMenu()
    } else {
      throw new Error('Invalid Student Data');
    }
  } catch (err) {
    let message;
    if (err instanceof Error) {
      message = err.message;
    } else {
      message = String(err);
    }
    errorReport({ message });
    addStudent();
  }
};


export const viewStudentByID = async () => {
  const getID = Number(await questionAsync('Enter Student ID : '));
  const result = instantStudent.students.filter((data) => data.id === getID);
  if (result.length === 0) {
    console.log('No user found with the ID');
  } else {
    result.forEach((idDetails) => {
      console.log(`
                Name\t:\t${idDetails.name}
                ID\t:\t${idDetails.id}
                Roll No\t:\t${idDetails.rollNo}
                DOB\t:\t${idDetails.dob}
                GRADE\t:\t${idDetails.detail?.grade ?? 'NA'}
                `);
    });
    // console.log(result);
    staffMenu();
  }
};


export const deleteByID = async () => {
  try {
    const getID = Number(await questionAsync('Enter student ID to delete : '));
    instantStudent.students = instantStudent.students.filter((student) => {
      return student.id !== getID;
    });
    console.log('deleted successfully');
    staffMenu();
  } catch (e) {
    console.log(e);
  }
};