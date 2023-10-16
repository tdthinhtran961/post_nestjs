import { IsEmail, IsNotEmpty } from 'class-validator';

export class userDto {
  @IsEmail()
  @ex
  email: string;
}
