import { Teacher } from './teacher';
import { Student } from './student';

// type Constructor<T> = { new(): T }//inline type to capture this

export class CreatorFactory {
  static createUser<T>(user: T) {
    const userName = <string>user;
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
