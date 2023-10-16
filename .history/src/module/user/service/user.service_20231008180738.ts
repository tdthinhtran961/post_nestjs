import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@InjectRepository() private readonly repo: Repository<>){}
}
