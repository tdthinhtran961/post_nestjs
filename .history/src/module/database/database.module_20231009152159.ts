
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
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: "Thinhdung123",
        database: configService.get('POSTGRES_DB'),
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}'
        ],
        synchronize: true,
      })
    }),
  ],
})
export class DatabaseModule {}