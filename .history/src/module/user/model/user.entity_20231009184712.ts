import { Exclude, Expose } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  // @Expose()
  id: number;

  @Column()
  // @Expose()
  email: string;

  @Column()
  firstName: string
  @Column()
  firstName: string

  @Column()
  @Exclude()
  password: string;
}
