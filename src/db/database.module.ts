import { TypeOrmModule } from '@nestjs/typeorm';
import { config as envConfig } from 'dotenv';

envConfig();

export const DatabaseModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: !!(process.env.NODE_ENV === 'development'),
  autoLoadEntities: true,
});
