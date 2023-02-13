import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({
  name: 'productImages',
})
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  url: string;

  @ManyToOne(() => Product, (product) => product.images)
  product: Product;
}
