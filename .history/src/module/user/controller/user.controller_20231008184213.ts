import { Controller } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
 -> ${1.replace(/^(.).*/, function(match) { return match[1].toUpperCase() + match[2]; })}
}
