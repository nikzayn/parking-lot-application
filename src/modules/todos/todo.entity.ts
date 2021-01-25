import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  name: string;

  @Column('text')
  description: string;

  @Column()
  deadline: Date;

  @Column()
  isActive: boolean;
}
