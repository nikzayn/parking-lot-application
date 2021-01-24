import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column("text")
    description: string;

    @Column()
    deadline: Date;

    @Column()
    isActive: boolean;
}