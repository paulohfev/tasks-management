import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "src/tasks/task.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // unique property
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // eager true ~> in fetching the user, we are also fetching tasks with it.
  @OneToMany(_type => Task, task => task.user, { eager: true })
  tasks: Task[];
}
