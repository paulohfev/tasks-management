import { Exclude } from "class-transformer";
import { User } from "src/auth/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./task-status.enum";

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid') // ~> primary column for indexing and generates a unique id
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @ManyToOne(_type => User, user => user.tasks, { eager: false })
  // excludes the user property whenever we return a JSON response
  @Exclude({ toPlainOnly: true })
  user: User
}
