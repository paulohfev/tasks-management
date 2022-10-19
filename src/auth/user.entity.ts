import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // unique property
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}
