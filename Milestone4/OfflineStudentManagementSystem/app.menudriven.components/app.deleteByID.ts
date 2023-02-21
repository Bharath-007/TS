import { menuDriven } from "../app";
import { Student } from "../app.class.components/app.student.class"
import { questionAsync } from "./app.staffRegister"

export const deleteByID = async () => {
    const getID = Number(await questionAsync('Enter student ID to delete : '))
    Student.students = Student.students.filter((student) => student.id !== getID);
    console.log('deleted successfully');  
    menuDriven();
}