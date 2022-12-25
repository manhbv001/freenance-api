import BaseEntity from 'src/common/entities/base.entity';
import { ECategoryType } from 'src/common/enums/CategoryType.enum';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Group } from '../group/group.entity';
import { User } from '../user/user.entity';

@Entity()
export class Category extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Column('int')
  type: ECategoryType;

  @Column({ nullable: true })
  description: string;

  @Column()
  symbol_url: string;

  @Column()
  budget: number;

  @ManyToOne(() => User, (user) => user.categories)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Group, (group) => group.categories)
  @JoinColumn({ name: 'group_id' })
  group: Group;
}
