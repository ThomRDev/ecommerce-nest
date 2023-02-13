import {
  IsString,
  IsOptional,
  IsArray,
  IsPositive,
  IsInt,
  IsNumber,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsOptional()
  status?: boolean;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
