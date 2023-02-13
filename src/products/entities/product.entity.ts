import { Invoice } from 'src/invoices/entities/invoice.entity';
import { ProductImage } from './product-image.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({
  name: 'products',
})
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'decimal',
    default: 0,
  })
  price: number;

  @Column({
    type: 'int',
    default: 0,
  })
  stock: number;

  @Column({
    type: 'boolean',
    default: true,
  })
  status: boolean;

  @ManyToMany(() => Invoice, (invoice) => invoice.products)
  @JoinTable()
  invoices: Invoice[];

  @OneToMany(() => ProductImage, (prodImag) => prodImag.product)
  images: ProductImage[];
}
