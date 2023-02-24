import { menuDriven1, readLine, teacherInstance } from '../app'
import { instantTeacher, instantStudent } from '../app'
import { Teacher } from '../factoryComponents/teacher'
import { menuDriven,showMenu2} from '../app'

export const questionAsync = (prompt: string): Promise<string> => {
    return new Promise((res) => {
        readLine.question(prompt, (answer: string) => {
            res(answer);
        });
    });
}

export const staffLogin = async () => {
    try {
        const type = 'teacher';
        const name = await questionAsync('Enter staff name: ');
        const password = await questionAsync('Enter staff password: ');
        validateStaffLogin(name, password)
        Teacher.instanceOfTeacher.isActive = true;
        return menuDriven1();
    } catch (err) {
        console.log(`Login error - ${err}`);

    }
}

export const validateStaffLogin = (userName: string, password: string) => {
    if (userName !== instantTeacher.teacher.name && password !== instantTeacher.teacher.password) {
        // console.log(instantTeacher.teacher['password']);
        console.log('Invalid Staff login');
        menuDriven();
    }
    else if (userName === instantTeacher.teacher.name && password !== instantTeacher.teacher.password) {
        console.log('Invalid password');
        staffLogin();
    }
    else {
        console.log('-----Staff Login Successfull-----');
        showMenu2();
    }
}


