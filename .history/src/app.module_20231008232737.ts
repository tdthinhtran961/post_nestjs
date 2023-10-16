import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './module/database/database.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
