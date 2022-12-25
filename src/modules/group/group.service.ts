import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/services/base.service';
import { SuccessResponse } from 'src/common/utils/Response';
import { CreateGroupDto } from './group.dto';
import { Group } from './group.entity';

export class GroupService extends BaseService<Group> {
  constructor(@InjectRepository(Group) repo) {
    super(repo);
  }

  async createOne(payload: CreateGroupDto) {
    const ins = new Group();
    ins.name = payload.name;

    const newData = await this.repository.save(ins);
    return new SuccessResponse(newData);
  }
}
