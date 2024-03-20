import { DataSource } from 'typeorm';
import { Product } from './src/product/product.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db_stylos',
  synchronize: false,
  logging: false,
  entities: [Product],
  migrations: ['src/migration/**/*.ts'],
});

export default AppDataSource;
