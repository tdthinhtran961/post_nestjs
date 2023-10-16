import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ClassConstructor {
  new (...args: any[]) : {}
}

export function Serialize(classInter: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(classInter))
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private readonly classInter: any) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data: any) => {
        return plainToInstance(this.classInter, data, {
          excludeExtraneousValues: false,
        });
      }),
    );
  }
}
