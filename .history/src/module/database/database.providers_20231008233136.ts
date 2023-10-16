import { DataSource } from 'typeorm';
import { UserEntity } from '../user/model/user.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Thinhdung123',
        database: 'post_project',
        entities: [
          // __dirname + '/../**/*.entity{.ts,.js}'
          // UserEntity
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
