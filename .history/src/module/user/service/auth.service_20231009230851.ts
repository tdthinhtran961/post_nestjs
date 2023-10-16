import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from '../dtos/register.dto';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../model/user.entity';

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
    //hash password
    const hashPassword = await bcrypt.hash(reqBody.password, 10);
    reqBody.password = hashPassword;
    //save db
    const newUser: UserEntity = await this.userService.create(reqBody);
    //generate jwt
    const payload = {
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.role,
    };
    const access_token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET_KEY,
    });

    return {
      msg: ""
    }
  }
}
