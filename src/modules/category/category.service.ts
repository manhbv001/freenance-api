import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/services/base.service';
import { Category } from './category.entity';

export class CategoryService extends BaseService<Category> {
  constructor(@InjectRepository(Category) repository) {
    super(repository);
  }
}
