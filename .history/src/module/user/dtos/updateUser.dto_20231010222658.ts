import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;
  @IsNotEmpty()
  @IsOptional()
  password: string;
  @IsNotEmpty()
  @IsOptional()
  firstName: string;
  @IsNotEmpty()
  @IsOptional()
  lastName: string;
  @IsNotEmpty()
  @IsOptional()
  role: string;
}
