import { Exclude } from 'class-transformer';
import BaseEntity from 'src/common/entities/base.entity';
import { EUserType } from 'src/common/enums/UserType.enum';
import { Utils } from 'src/common/utils';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import { Category } from '../category/category.entity';
import { Group } from '../group/group.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ length: 255 })
  fullname: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255, unique: true })
  username: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ nullable: true })
  date_of_birth: Date;

  @Column('int')
  type: EUserType;

  @Column({ length: 500, nullable: true })
  avatar_url: string;

  @OneToMany(() => Category, (category) => category.user)
  categories: Category[];

  @OneToMany(() => Group, (group) => group.user)
  groups: Group[];

  @BeforeInsert()
  hashInsertedPassword() {
    this.password = Utils.encodeString(this.password);
  }

  @BeforeUpdate()
  hashUpdatedPassword() {
    this.password = Utils.encodeString(this.password);
  }
}
