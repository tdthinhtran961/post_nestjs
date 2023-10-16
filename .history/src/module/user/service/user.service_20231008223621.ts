import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';


@Injectable()
export class UserService {
constructor(@InjectRepository(UserEntity
) private readonly userRepo: Repository<UserEntity
>){}

  //CRUD
}
