import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupModule } from '../group/group.module';
import { CategoryController } from './category.controller';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Module({
  providers: [CategoryService],
  exports: [CategoryService],
  controllers: [CategoryController],
  imports: [TypeOrmModule.forFeature([Category]), GroupModule],
})
export class CategoryModule {}
