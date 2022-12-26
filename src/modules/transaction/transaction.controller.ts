import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/common/decorators/user.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { IAuthUser } from 'src/common/interfaces/auth-user.interface';
import { CreateTransactionDto } from './transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private service: TransactionService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createOne(@Body() body: CreateTransactionDto, @GetUser() user: IAuthUser) {
    return this.service.createOneCustome(body, user);
  }
}
