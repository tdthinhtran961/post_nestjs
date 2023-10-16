import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { request } from 'http';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private roles: string[]) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log(request);
    return false;
  }
}
