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
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { Serialize } from 'src/interceptor/serialize.interceptor';
import { UserEntity } from '../model/user.entity';
import { AuthService } from '../service/auth.service';
import { RegisterDto } from '../dtos/register.dto';

@Controller('auth')
@Serialize(UserEntity)
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}
  @Post('/register')
  register(@Body() reqBody: RegisterDto) {
    return this.authService.register(reqBody)
  }

  @Post('/login')
  login(@Body() reqBody: ) {}

  // @UseGuards(AuthGuard)
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
