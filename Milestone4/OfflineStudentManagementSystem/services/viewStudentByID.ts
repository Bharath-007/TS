import { menuDriven } from '../app';
import { Student } from '../factoryComponents/student'
import { questionAsync } from './staffRegister';

export const viewStudentByID = async () => {
    const getID = Number(await questionAsync('Enter Student ID : '))
    const result = Student.students.filter(data => data.id === getID)
    if (result.length === 0) {
        console.log('No user found with the ID');
    } else {
        result.forEach((idDetails)=>{
            console.log(`
                Name\t:\t${idDetails.name}
                ID\t:\t${idDetails.id}
                Roll No\t:\t${idDetails.rollNo}
                DOB\t:\t${idDetails.dob}
                Details\t:\t${idDetails.detail??'NA'}
                `);
        })
        // console.log(result);
        menuDriven();
    }
}