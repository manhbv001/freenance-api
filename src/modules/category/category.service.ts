import { BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IAuthUser } from 'src/common/interfaces/auth-user.interface';
import { BaseService } from 'src/common/services/base.service';
import { GroupService } from '../group/group.service';
import { User } from '../user/user.entity';
import { CreateCategoryDto } from './category.dto';
import { Category } from './category.entity';

export class CategoryService extends BaseService<Category> {
  constructor(
    @InjectRepository(Category) repository,
    private groupService: GroupService,
  ) {
    super(repository);
  }

  public async createOneCustome(
    payload: CreateCategoryDto,
    authUser: IAuthUser,
  ) {
    const category = new Category();

    const groupData = await this.groupService.findOne({
      where: { id: payload.groupId },
      relations: ['user'],
    });

    if (!groupData.data || groupData.data.user.id !== authUser.id)
      throw new BadRequestException('Đã có lỗi xảy ra!');

    const user = new User();
    user.id = authUser.id;

    category.name = payload.name;
    category.description = payload.description;
    category.type = +payload.type;
    category.symbol_url = payload.symbol_url;
    category.budget = payload.budget;
    category.user = user;
    category.group = groupData.data;

    return category;
  }
}
