import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { UserEntity } from '../model/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  //CRUD
  create(reqBody: any) {
    const user = this.userRepo.create(reqBody);
    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  async update(id: number, reqBody: any) {
    let user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist');
    }
    user = { ...user, ...reqBody };
    return this.userRepo.save()
  }
}
