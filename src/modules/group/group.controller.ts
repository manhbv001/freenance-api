import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { GetUser } from 'src/common/decorators/user.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RoleGuard } from 'src/common/guards/role.guard';
import { IAuthUser } from 'src/common/interfaces/auth-user.interface';
import { CreateGroupDto } from './group.dto';
import { GroupService } from './group.service';

@Controller('groups')
export class GroupController {
  constructor(private service: GroupService) {}

  @Post()
  @Roles(1)
  @UseGuards(JwtAuthGuard, RoleGuard)
  createOne(@Body() payload: CreateGroupDto, @GetUser() user: IAuthUser) {
    return this.service.createOneCustom(payload, user);
  }
}
