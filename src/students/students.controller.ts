import { Controller, Get } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './students.entity';
import { response } from 'express';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  getStudents(): Promise<Student[]> {
    return this.studentsService.getStudents();
  }

  @Get('/insert')
  async insertStudents() {
    await this.studentsService.insertStudents();
    return {
      message: 'ok',
    };
  }
}
