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

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    //1. get token form header
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    //2. jwtVerify validate token
    if (!token) {
      throw new ForbiddenException('Please provide access token');
    }
    //3. find user in db based on jwtVerify
    //4. Assign user to request obj
    return false;
  }
}