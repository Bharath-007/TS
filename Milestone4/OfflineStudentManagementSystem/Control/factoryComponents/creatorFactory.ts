import { Teacher } from './teacher';
import { Student } from './student';


export class CreatorFactory {
  static createUser(user: string) {
    const userName = user;
    switch (userName.toLowerCase()) {
      case 'student':
        return Student.getInstance();
      case 'teacher':
        return Teacher.getInstance();
      default:
        throw new Error('Invalid UserName');
    }
  }
}
