import { BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/services/base.service';
import { CategoryService } from '../category/category.service';
import { User } from '../user/user.entity';
import { CreateTransactionDto } from './transaction.dto';
import { Transaction } from './transaction.entity';

export class TransactionService extends BaseService<Transaction> {
  constructor(
    @InjectRepository(Transaction) repository,
    private categoryService: CategoryService,
  ) {
    super(repository);
  }

  public async createOneCustome(payload: CreateTransactionDto, authUser: User) {
    const { data: category } = await this.categoryService.findOne({
      where: { id: payload.categoryId, user: { id: authUser.id } },
      relations: ['group', 'user'],
    });

    if (!category) {
      throw new BadRequestException();
    }

    const user = new User();
    user.id = authUser.id;

    const transaction = new Transaction();
    transaction.amount = payload.amount;
    transaction.timestamp = new Date(payload.timestamp);
    transaction.note = payload.note;
    transaction.category = category;
    transaction.user = user;

    return this.repository.save(transaction);
  }
}
