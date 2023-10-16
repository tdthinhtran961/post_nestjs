import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
constructor(@InjectRepository(UserEntity
) private readonly userRepo: Repository<UserEntity
>){}

  //CRUD
}
