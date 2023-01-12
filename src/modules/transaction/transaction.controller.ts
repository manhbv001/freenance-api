import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/common/decorators/user.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { User } from '../user/user.entity';
import { CreateTransactionDto } from './transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private service: TransactionService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createOne(@Body() body: CreateTransactionDto, @GetUser() user: User) {
    return this.service.createOneCustome(body, user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@GetUser() user: User) {
    return this.service.findAll({
      where: {
        user: {
          id: user.id,
        },
        deleted_at: null,
      },
      relations: ['category'],
    });
  }
}
