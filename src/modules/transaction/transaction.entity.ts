import BaseEntity from 'src/common/entities/base.entity';
import { ECategoryType } from 'src/common/enums/CategoryType.enum';
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Category } from '../category/category.entity';
import { Group } from '../group/group.entity';
import { User } from '../user/user.entity';

@Entity()
export class Transaction extends BaseEntity {
  @Column()
  amount: number;

  @Column('int')
  type: ECategoryType;

  @Column({ nullable: true })
  note: string;

  @Column()
  timestamp: Date;

  @Column({ default: true })
  report_include: boolean;

  @ManyToOne(() => User, (user) => user.categories)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Group, (group) => group.categories)
  @JoinColumn({ name: 'group_id' })
  group: Group;

  @ManyToOne(() => Category, (category) => category.transactions)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @BeforeInsert()
  getDefaultTimeStamp() {
    if (!this.timestamp) {
      this.timestamp = new Date();
    }
  }
}
