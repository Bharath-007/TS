import { instantStudent, menuDriven1 } from '../app';
import { Teacher } from '../factoryComponents/teacher';
import { questionAsync } from './staffRegister';

export const deleteByID = async () => {
  try {
    const getID = Number(await questionAsync('Enter student ID to delete : '));
    instantStudent.students = instantStudent.students.filter((student) => {
      return student.id !== getID;
    });
    console.log('deleted successfully');
    menuDriven1();
  } catch (e) {
    console.log(e);
  }
};
