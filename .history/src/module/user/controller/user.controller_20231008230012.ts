import { Body, Controller } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @
  createUser(@Body() reqBody: any) {
    return this.userService.create(reqBody);
  }

  get
}
