import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
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
    const []
    //4. Assign user to request obj
    return false;
  }
}
