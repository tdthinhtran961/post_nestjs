import { BadRequestException, Get, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { RegisterDto } from '../dtos/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(reqBody: RegisterDto) {
    const user = await this.userService.find(reqBody.email);
    if (user) {
      throw new BadRequestException('Email already exist');
    }
  }
}
