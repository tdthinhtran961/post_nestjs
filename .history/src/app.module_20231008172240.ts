import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [DataSourceModule, DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
