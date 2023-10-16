import { Exclude, Expose } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum ROLES {
  ADMIN = 'admin',
  MOD = 'mod',
  USER = 'user',
}

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  // @Expose()
  id: number;

  @Column()
  // @Expose()
  email: string;

  @Column()
  firstName: string;
  @Column()
  lastName: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    type: "enum",
    
  })
  @Exclude()
  role: ROLES;
}
