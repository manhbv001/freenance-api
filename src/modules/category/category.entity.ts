import BaseEntity from 'src/common/entities/base.entity';
import { ECategoryType } from 'src/common/enums/CategoryType.enum';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Group } from '../group/group.entity';
import { Transaction } from '../transaction/transaction.entity';
import { User } from '../user/user.entity';

@Entity()
export class Category extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Column('int')
  type: ECategoryType;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  symbol_url: string;

  @Column({ nullable: true })
  budget: number;

  @ManyToOne(() => User, (user) => user.categories)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Group, (group) => group.categories)
  @JoinColumn({ name: 'group_id' })
  group: Group;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];
}
