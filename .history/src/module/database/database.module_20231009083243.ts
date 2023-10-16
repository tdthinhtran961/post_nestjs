import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "Thinhdung123",
        database: "post_project",
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}'
        ],
        synchronize: true,
      })
    }),
  ],
})
export class DatabaseModule {}