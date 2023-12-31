import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from '../dtos/register.dto';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../model/user.entity';
import { LoginDto } from '../dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(reqBody: RegisterDto) {
    const [user] = await this.userService.find(reqBody.email);
    if (!user) {
      throw new BadRequestException('Email already exist');
    }
    //hash password
    const hashPassword = await bcrypt.hash(reqBody.password, 10);
    reqBody.password = hashPassword;
    //save db
    const newUser: UserEntity = await this.userService.create(reqBody);
    //generate jwt
    const payload = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    };
    const access_token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET_KEY,
    });

    return {
      msg: 'User has been created',
      access_token,
    };
  }

  async login(reqBody: LoginDto) {
    const [user] = await this.userService.find(reqBody.email);
    if (!user) {
      throw new BadRequestException('Invalid Credentials');
    }
    // true -> check password
    const isMatchPassword = await bcrypt.compare(
      reqBody.password,
      user.password,
    );
    if (!isMatchPassword) {
      throw new BadRequestException('Invalid Credentials');
    }
    const payload = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    };
    const access_token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET_KEY,
    });

    return {
      msg: 'User has been login successfully',
      access_token,
    };
  }

}
