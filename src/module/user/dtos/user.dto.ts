import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;
  @IsNumber()
  id: number;
}
