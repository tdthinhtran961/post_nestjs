import { Injectable } from '@nestjs/common';


@Injectable()
export class UserService {
  constructor(@InjectRepository(userEntity
  ) private readonly userRepo: Repository<userEntity
  >){}

  //CRUD
}
