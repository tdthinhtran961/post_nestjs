import { IsEmail } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsNo
  password: string;
}
