import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UserService } from 'src/module/user/service/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      //1. get token form header
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (!token) {
      throw new ForbiddenException('Please provide access token');
    }
    //2. jwtVerify validate token
    const payload = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET_KEY,
    });
    console.log(payload);
    //3. find user in db based on jwtVerify
    const [user] = await this.userService.find(payload.email);
    if (!user)
      throw new BadRequestException(
        'User not belong to token, please try again',
      );
    //4. Assign user to request obj
    request.currentUser = user;
    return true;
    } catch (error) {
      console.log('error from auth gua');
    }
  }
}
