import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { UserEntity } from '../model/user.entity';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { RegisterDto } from '../dtos/register.dto';
import { Permission } from 'src/helpers/checkPermission.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  //CRUD
  create(reqBody: RegisterDto) {
    const user = this.userRepo.create(reqBody);
    return this.userRepo.save(user);
  }

  find(email: string) {
    return this.userRepo.find({ where: { email } });
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  async update(id: number, reqBody: UpdateUserDto, currentUser: UserEntity) {
    if (reqBody.role === 'admin')
      throw new ForbiddenException(
        "You do not have permission to update role 'Admin'",
      );
    let user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    Permission.check(id, currentUser);
    // user = { ...user, ...reqBody }
    user = { ...user, ...reqBody, role: user.role };

    //no admin no update
    if (reqBody.hasOwnProperty('role')) {
      if (currentUser.role !== 'admin')
        throw new ForbiddenException(
          'You do not have permission to update role',
        );
      user = { ...user, ...reqBody };
    }

    return this.userRepo.save(user);
  }

  async delete(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist');
    }
    return this.userRepo.remove(user);
  }
}
