import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/services/base.service';
import { Response, SuccessResponse } from 'src/common/utils/Response';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {
    super(repo);
  }

  public async getAll() {
    return {
      test: 'Abc',
    };
  }

  public async createOne(payload: CreateUserDto): Promise<Response<User>> {
    const ins = new User();
    ins.fullname = payload.fullname;
    ins.username = payload.username;
    ins.email = payload.email;
    ins.password = payload.password;
    ins.date_of_birth = payload.date_of_birth;
    ins.type = +payload.type;
    ins.avatar_url = payload.avatar_url;

    const newUser = await this.repo.save(ins);

    return new SuccessResponse(newUser);
  }
}
