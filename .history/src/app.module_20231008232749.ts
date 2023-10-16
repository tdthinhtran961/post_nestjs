import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './module/database/database.module';
import { UserModule } from './module/user/user.module';
import { UserController } from './module/user/controller/user.controller';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [AppController, UserController],
  providers: [],
})
export class AppModule {}
