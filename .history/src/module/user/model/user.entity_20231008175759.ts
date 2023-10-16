import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "user"})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  pass

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;
}