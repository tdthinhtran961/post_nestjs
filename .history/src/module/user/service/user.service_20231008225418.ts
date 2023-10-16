import { Injectable } from '@nestjs/common';
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
    const user = this.userRepo.findOneBy({ id });
  }

  update(id: number, reqBody:any) {
    const user = await
  }
}
