import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text', { array: true })
  color: string[];

  @Column('text', { array: true })
  size: string[];

  @Column('text', { array: true })
  material: string[];

  @Column('text', { array: true })
  images: string[];

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
