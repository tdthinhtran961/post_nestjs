import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './module/database/database.module';
import { UserModule } from './module/user/user.module';
import { UserController } from './module/user/controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './module/user/model/user.entity';

@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [UserEntity, Report],
    synchronize: true, //production => migration
  }),],
  controllers: [AppController, UserController],
  providers: [],
})
export class AppModule {}
