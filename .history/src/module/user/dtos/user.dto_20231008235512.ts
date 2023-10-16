import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class userDto {
  @IsEmail()
  @Expose
  email: string;
}
