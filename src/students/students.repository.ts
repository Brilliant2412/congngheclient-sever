import { EntityRepository, Repository } from 'typeorm';
import { Student } from './students.entity';

@EntityRepository(Student)
export class StudentsRepository extends Repository<Student> {}
