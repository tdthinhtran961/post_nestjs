import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from '../dtos/register.dto';

@Injectable()
export class AuthService {


  async register(reqBody: RegisterDto) {
    // const user = await this.userService.find(reqBody.email);
    if (user) {
      throw new BadRequestException('Email already exist');
    }
  }
}
