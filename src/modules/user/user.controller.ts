import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators/role.decorator';
import { RoleGuard } from 'src/common/guards/role.guard';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private service: UserService) {}

  @Post()
  @Roles(1)
  @UseGuards(RoleGuard)
  create(@Body() payload: CreateUserDto) {
    return this.service.createOne(payload);
  }
}
