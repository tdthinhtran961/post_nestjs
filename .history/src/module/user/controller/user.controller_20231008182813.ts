import { Controller } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  class _thinhMock extends Mock implements thinh {}
  
  final thinh = _thinhMock();
}
