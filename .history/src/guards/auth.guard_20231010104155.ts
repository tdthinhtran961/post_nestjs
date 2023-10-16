import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    //1. get token form header
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (!token) {
      throw new ForbiddenException('Please provide access token');
    }
    //2. jwtVerify validate token
    const payload = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET_KEY
    })
    console.log(object);
    //3. find user in db based on jwtVerify
    //4. Assign user to request obj
    return false;
  }
}
