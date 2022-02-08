import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsRepository } from './students.repository';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentsRepository])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
