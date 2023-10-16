import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DataSourceModule } from './database/data-source/data-source.module';
import { DatabaseModule } from './post_projcet/database/database.module';
import { DataSourceModule } from './database/data-source.module';
import { DataSourceModule } from './database/data-source/data-source.module';

@Module({
  imports: [DataSourceModule, DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
