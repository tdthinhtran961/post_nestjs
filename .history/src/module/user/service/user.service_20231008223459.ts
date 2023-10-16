import { Injectable } from '@nestjs/common';


@Injectable()
export class UserService {
  constructor(@InjectRepository(Entity
  ) private readonly Repo: Repository<Entity
  >){}

  //CRUD
}
