export namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Subject {
    teacher?: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
} 