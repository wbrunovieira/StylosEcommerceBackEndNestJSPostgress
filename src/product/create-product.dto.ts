import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsArray()
  @IsString({ each: true })
  color: string[];

  size: string[];

  @IsArray()
  @IsString({ each: true })
  material: string[];

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
