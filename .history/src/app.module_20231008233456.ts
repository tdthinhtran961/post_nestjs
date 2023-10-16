import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './module/database/database.module';
import { UserModule } from './module/user/user.module';
import { UserController } from './module/user/controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './module/user/model/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Thinhdung123',
      database: 'post_project',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
        // UserEntity
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController, UserController],
  providers: [],
})
export class AppModule {}
