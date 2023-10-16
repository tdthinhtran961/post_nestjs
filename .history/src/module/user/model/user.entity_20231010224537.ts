import { Exclude, Expose } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum ROLES {
  ADMIN = 'admin',
  MOD = 'mod',
  USER = 'user',
}

@Entity({ name: 'user' })
export class UserEntity {
  constructor(params) {
    
  }
  
}
