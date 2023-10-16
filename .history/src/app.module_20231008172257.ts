import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
