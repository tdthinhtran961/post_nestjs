import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @Is
  email: string;
  @IsNotEmpty()
  password: string;
}
