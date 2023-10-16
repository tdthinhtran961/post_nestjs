import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsEmail()
  @Expose()
  email: string;
  id: number;
}
