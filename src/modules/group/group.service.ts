import { InjectRepository } from '@nestjs/typeorm';
import { IAuthUser } from 'src/common/interfaces/auth-user.interface';
import { BaseService } from 'src/common/services/base.service';
import { SuccessResponse } from 'src/common/utils/Response';
import { User } from '../user/user.entity';
import { CreateGroupDto } from './group.dto';
import { Group } from './group.entity';

export class GroupService extends BaseService<Group> {
  constructor(@InjectRepository(Group) repo) {
    super(repo);
  }

  async createOneCustom(payload: CreateGroupDto, authUser: IAuthUser) {
    const ins = new Group();
    const user = new User();
    ins.name = payload.name;
    user.id = authUser.id;
    ins.user = user;
    const newData = await this.repository.save(ins);
    return new SuccessResponse(newData);
  }
}
