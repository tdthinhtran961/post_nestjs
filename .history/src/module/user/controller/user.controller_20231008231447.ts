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
import { CreateUserDto } from '../dtos/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  createUser(@Body() reqBody: CreateUserDto) {
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
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() reqBody: CreateUserDto) {
    return this.userService.update(id, reqBody);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
