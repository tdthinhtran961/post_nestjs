import { Controller } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly Service: Service){}
}