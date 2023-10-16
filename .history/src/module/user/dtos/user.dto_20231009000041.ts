import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {

  @Expose()
  email: string;

  @Expose()
  id: number;
}
