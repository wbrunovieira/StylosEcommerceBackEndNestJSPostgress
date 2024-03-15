import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  findAll(): string[] {
    return ['product1', 'product2', 'product3'];
  }
}
