import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: boolean;

  @Column()
  dob: Date;

  @Column()
  homeTown: string;

  @Column()
  mark: number;
}
