import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  createUser(@Body() reqBody: any) {
    return this.userService.create(reqBody);
  }

  @Get('')
  G() {}
}
