import { BadRequestException } from '@nestjs/common';
import { UserEntity } from 'src/module/user/model/user.entity';

export class Permission {
  static check(id: number, currentUser: UserEntity) {
    if (id === currentUser.id) return;
    if (currentUser.role === 'admin') return;
    throw new BadRequestException('User can not perform action');
  }
}
