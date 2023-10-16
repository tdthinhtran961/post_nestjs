import { IsEmail, IsNotEmpty } from 'class-validator';

export class registerUserDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
