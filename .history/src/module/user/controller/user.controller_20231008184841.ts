import { Controller } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  
  private $thinh;
  
  public function get${1/(.*)/thinh:capitalize}() \{
    return $this->thinh;
  }
}
