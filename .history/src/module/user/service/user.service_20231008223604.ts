import { Injectable } from '@nestjs/common';


@Injectable()
export class UserService {
constructor(@InjectRepository(UserEntity
) private readonly userRepo: Repository<UserEntity
>){}

  //CRUD
}
