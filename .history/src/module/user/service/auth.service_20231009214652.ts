import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from '../dtos/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(reqBody: RegisterDto) {
    const user = await this.userService.find(reqBody.email);
    if (user) {
      throw new BadRequestException('Email already exist');
    }
    const hastPassword
  }
}
