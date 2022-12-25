import { Body, Controller, Post } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Post()
  async createOne(@Body() payload: Category) {
    const data = await this.service.createOne(payload);

    return data;
  }
}
