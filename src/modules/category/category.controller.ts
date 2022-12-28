import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/common/decorators/user.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { IAuthUser } from 'src/common/interfaces/auth-user.interface';
import { CreateCategoryDto } from './category.dto';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createOne(@Body() payload: CreateCategoryDto, @GetUser() user) {
    return this.service.createOneCustome(payload, user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public findAll(@GetUser() user: IAuthUser) {
    return this.service.finAll({
      where: {
        user: {
          id: user.id,
        },
        deleted_at: null,
      },
    });
  }
}
