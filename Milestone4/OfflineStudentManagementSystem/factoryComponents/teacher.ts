import { ITeacher } from '../interfaces/teacherInterface';

export class Teacher {
  isActive: boolean = false;
  teacher: ITeacher = {
    name: 'Admin',
    password: 'Admin@123',
  };

  public static instanceOfTeacher: Teacher;
  private constructor() {}

  public static getInstance(): Teacher {
    if (!Teacher.instanceOfTeacher) {
      Teacher.instanceOfTeacher = new Teacher();
    }
    return Teacher.instanceOfTeacher;
  }

  public getData(): ITeacher {
    return this.teacher;
  }
}
