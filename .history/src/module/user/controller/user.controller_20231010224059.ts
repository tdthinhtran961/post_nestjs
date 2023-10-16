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
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { Serialize } from 'src/interceptor/serialize.interceptor';
import { UserEntity } from '../model/user.entity';
import { AuthService } from '../service/auth.service';
import { RegisterDto } from '../dtos/register.dto';
import { LoginDto } from '../dtos/login.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from 'src/decorator/currentUser.decorator';
import { RolesGuard } from 'src/guards/role.guard';

@Controller('auth')
@Serialize(UserEntity)
@UseGuards(AuthGuard)
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}
  @Post('/register')
  register(@Body() reqBody: RegisterDto) {
    return this.authService.register(reqBody);
  }

  @Post('/login')
  login(@Body() reqBody: LoginDto) {
    return this.authService.login(reqBody);
  }

  @Get()
  @UseGuards(new RolesGuard(['user', 'admin']))
  getAllUser(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Get('/current-user')
  getCurrentUser(@CurrentUser() currentUser: UserEntity) {
    return currentUser;
  }

  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(+id);
  }

  @Put('/:id')
  @UseGuards(new RolesGuard(['admin']))
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() reqBody: UpdateUserDto,
    @CurrentUser() CurrentUser: UserEntity
  ) {
    return this.userService.update(id, reqBody, CurrentUser);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
