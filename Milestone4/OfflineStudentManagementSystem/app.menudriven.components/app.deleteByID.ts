import { menuDriven } from "../app";
import { Student } from "../app.class.components/app.student.class"
import { Teacher } from "../app.class.components/app.teacher.class";
import { questionAsync } from "./app.staffRegister"


export const deleteByID = async () => {
    if (Teacher.isActive) {
        const getID = Number(await questionAsync('Enter student ID to delete : '))
        
        Student.students = Student.students.filter((student) => {
            return student.id !== getID;
        });

        // console.log(Student.students);
        
        console.log('deleted successfully');
        menuDriven();
    } else {
        console.log('Only staff can delete the student');
        return menuDriven();
    }
}