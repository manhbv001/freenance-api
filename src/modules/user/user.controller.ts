import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private service: UserService) {}

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.service.createOne(payload);
  }
}
