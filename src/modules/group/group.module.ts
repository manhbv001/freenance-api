import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupController } from './group.controller';
import { Group } from './group.entity';
import { GroupService } from './group.service';

@Module({
  providers: [GroupService],
  exports: [GroupService],
  controllers: [GroupController],
  imports: [TypeOrmModule.forFeature([Group])],
})
export class GroupModule {}
