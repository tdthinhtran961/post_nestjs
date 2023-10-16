import { Controller } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  const [text, setText] = useState('');
  setText('placeholder');
  const lowercaseText = text.toLowerCase();
  console.log(lowercaseText);
}
