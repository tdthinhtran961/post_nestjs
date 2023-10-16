import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    //1. get token form header
    const token = request.header.authorization
    //2. jwtVerify validate token
    //3. find user in db based on jwtVerify
    //4. Assign user to request obj
    return false;
  }
}
