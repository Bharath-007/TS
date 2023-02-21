import { readLine } from '../app'
import { CreatorFactory } from '../app.factory.components/app.creator.factory'
import { ITeacher } from '../app.interface.components/app.teacher.interface'
import { teacherInstance } from '../app'
import { Teacher } from '../app.class.components/app.teacher.class'
import { menuDriven } from '../app'

export const questionAsync = (prompt: string): Promise<string> => {
    return new Promise((res) => {
        readLine.question(prompt, (answer: string) => {
            res(answer);
        });
    });

}

export const staffRegister = async () => {
    try {
        const type = 'teacher';
        const id = Number(await questionAsync('Enter staff ID: '));
        const name = await questionAsync('Enter staff name: ');
        const password = await questionAsync('Enter staff password: ');
        const className = await questionAsync('Enter staff class: ');
        const teacher = {
            type,
            id,
            name,
            password,
            className
        }
        Teacher.teacher(teacher);
        return menuDriven();
    } catch (err) {
        console.log(`${err}`);
    }
}