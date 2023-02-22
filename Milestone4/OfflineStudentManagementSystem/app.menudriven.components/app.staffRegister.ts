import { readLine, teacherInstance } from '../app'
import { CreatorFactory } from '../app.factory.components/app.creator.factory'
import { ITeacher } from '../app.interface.components/app.teacher.interface'
import { Teacher } from '../app.class.components/app.teacher.class'
import { menuDriven } from '../app'

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
        Teacher.isActive = true;
        return menuDriven();
    } catch (err) {
        console.log(`${err}`);
    }
}

export const validateStaffLogin = (userName: string, password: string) => {
    if (userName !== Teacher.teacher['name'] && password !== Teacher.teacher['password']) {
        console.log('Invalid Staff login');
        menuDriven();
    }
    else if (userName === Teacher.teacher['name'] && password !== Teacher.teacher['password']) {
        console.log('Invalid password');
        staffLogin();
    }
    else {
        console.log('-----Staff Login Successfull-----');
    }
}