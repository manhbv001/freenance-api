import { Module } from '@nestjs/common';
import { DatabaseModule } from './db/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryModule } from './modules/category/category.module';
import { GroupModule } from './modules/group/group.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    CategoryModule,
    GroupModule,
    AuthModule,
  ],
  exports: [DatabaseModule],
})
export class AppModule {}
