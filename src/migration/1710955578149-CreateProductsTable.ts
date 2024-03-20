import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductsTable1710955578149 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE products (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                name VARCHAR NOT NULL,
                color TEXT[] NOT NULL,
                size TEXT[] NOT NULL,
                material TEXT[] NOT NULL,
                images TEXT[] NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE products;`);
  }
}
