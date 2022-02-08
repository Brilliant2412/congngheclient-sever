import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentsRepository } from './students.repository';
import { Student } from './students.entity';
import { name as fName, date, address } from 'faker';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentsRepository)
    private studentsRepository: StudentsRepository,
  ) {}

  getStudents(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  async insertStudents() {
    for (let i = 0; i < 540000; i++) {
      const name = fName.findName();
      const gender = Math.random() < 0.5;
      const dob = date.between('2000-01-01', '2001-12-31');
      const homeTown = address.city();
      const mark = Math.floor(Math.random() * 11);
      const student = this.studentsRepository.create({
        name,
        gender,
        dob,
        homeTown,
        mark,
      });
      await this.studentsRepository.save(student);
    }
  }
}
