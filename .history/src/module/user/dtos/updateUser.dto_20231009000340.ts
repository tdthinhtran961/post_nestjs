import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsO
  email: string;
  @IsNotEmpty()
  password: string;
}
