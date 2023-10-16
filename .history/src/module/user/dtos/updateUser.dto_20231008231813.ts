import { IsEmail, IsNotEmpty } from 'class-validator';

export class updateUserDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
