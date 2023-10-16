import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { UserEntity } from '../model/user.entity';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UpdateUserDto } from '../dtos/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  //CRUD
  create(reqBody: CreateUserDto) {
    const user = this.userRepo.create(reqBody);
    return this.userRepo.save(user);
  }

  async findAll() {
    return await this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  async update(id: number, reqBody: UpdateUserDto) {
    let user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist');
    }
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
