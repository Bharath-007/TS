import { menuDriven } from '../app';
import { Student } from '../app.class.components/app.student.class'
import { questionAsync } from './app.staffRegister';

export const viewStudentByID = async () => {
    const getID = Number(await questionAsync('Enter Student ID : '))
    const result = Student.students.filter(data => data.id === getID)
    if (result.length === 0) {
        console.log('No user found with the ID');
    } else {
        console.log(result);
        menuDriven();
    }
}
