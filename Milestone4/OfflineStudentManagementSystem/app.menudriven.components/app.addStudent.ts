import { menuDriven } from "../app";
import { Student } from "../app.class.components/app.student.class";
import { questionAsync } from "./app.staffRegister";

export const addStudent = async () => {
    try{
        const type = 'student';
        const id = Number(await questionAsync('Enter Student ID : '));
        const name = await questionAsync('Enter Student Name : ');
        const rollNo = Number(await questionAsync('Enter Studdent Roll No : '));
        const dob = await questionAsync('Enter Student DOB : ');
        const student = {
            type,
            id,
            name,
            rollNo,
            dob,
        }
        Student.student(student)
        return menuDriven();
    }catch(err){
        console.log(err);
    }
}