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
        host: configService.DATABASE_HOST,
        port: configService.DATABASE_PORT,
        username: configService.DATABASE_USER,
        password: configService.DATABASE_PASSWORD,
        database: configService.DATABASE_NAME,
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}'
        ],
        synchronize: true,
      })
    }),
  ],
})
export class DatabaseModule {}