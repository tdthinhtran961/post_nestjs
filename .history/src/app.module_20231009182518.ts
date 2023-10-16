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
    ConfigModule.forRoot()
    DatabaseModule
  ],
  controllers: [AppController, UserController],
  providers: [],
})
export class AppModule {}
