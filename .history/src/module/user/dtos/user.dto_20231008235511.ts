import { IsEmail, IsNotEmpty } from 'class-validator';

export class userDto {
  @IsEmail()
  @Expo
  email: string;
}
