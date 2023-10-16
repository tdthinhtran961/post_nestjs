import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './module/database/database.module';

@Module({
  imports: [DatabaseModule, use],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
