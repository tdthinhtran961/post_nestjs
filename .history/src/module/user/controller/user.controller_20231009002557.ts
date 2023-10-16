import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { Serialize } from 'src/interceptor/serialize.interceptor';
import { UserDto } from '../dtos/user.dto';

@Controller('users')
@Serialize(Ys)
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/signup')
  createUser(@Body() reqBody: any) {
    return this.userService.create(reqBody);
  }

  @Get()
  getAllUser(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(+id);
  }

  @Put('/:id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() reqBody: UpdateUserDto,
  ) {
    return this.userService.update(id, reqBody);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
