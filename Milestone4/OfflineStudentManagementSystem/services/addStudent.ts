import { menuDriven } from "../app";
import { Student } from "../factoryComponents/student";
import { questionAsync } from "./staffRegister";
import { instantTeacher, instantStudent } from '../app'

export const addStudent = async () => {
    try {
        const type = 'student';
        const id = Number(await questionAsync('Enter Student ID : '));
        const name = await questionAsync('Enter Student Name : ');
        const rollNo = Number(await questionAsync('Enter Studdent Roll No : '));
        const dob = await questionAsync('Enter Student DOB(MM/dd/YYYY) : ');
        validateuserDetails(id,name,rollNo,dob);
        const student = {
            type,
            id,
            name,
            rollNo,
            dob,
        }
        instantStudent.studentSetter(student)
        return menuDriven();
    } catch (err) {
        console.log(err);
    }
}

const validateuserDetails = (id: number, name: string, rollNo: number, dob: string) => {
    const nameRegex = /^[a-zA-Z]{2,10}$/; 
    if (isNaN(id)) {
        // console.log(`ID - ${!isNaN(id)}`);
        console.log('ID must be a number');
        addStudent();
    } else if (!name.match(nameRegex)) {
        // console.log(`name - ${!name.match(nameRegex)}`);
        console.log('Student Name should contain atleat 2 characters');
        addStudent();
    } else if (isNaN(rollNo)) {
        // console.log(`roll no - ${isNaN(rollNo)}`);
        console.log(`Roll Number must be a number`);
        addStudent();
    } else if (isValideDate(dob)!=='valid'){
        // console.log(`dob - ${ isValideDate(dob)}`);
        console.log('date not in correct format of MM/dd/YYYY');
        addStudent();
    }else{
        console.log(`Student Added Successfully`);
    }
}

export const isValideDate = (dob: string):string => {
    const dateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    if(dob.match(dateRegex)){
        return 'valid';
    }else{
        return 'invalid';
    }
}