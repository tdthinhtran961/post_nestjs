import { Injectable, NotFoundException } from '@nestjs/common';
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
    let user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    Permission.check(id);

    user = { ...user, ...reqBody };
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
