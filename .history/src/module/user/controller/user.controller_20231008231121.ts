import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  createUser(@Body() reqBody: any) {
    return this.userService.create(reqBody);
  }

  @Get('')
  getAllUser() {
    return this.userService.findAll();
  }

  @Get('')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Put('/:id')
  updateUser(@Param('id', ParseIntPipe) id: number, debo) {
    return this.userService.update(id, reqBody);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
