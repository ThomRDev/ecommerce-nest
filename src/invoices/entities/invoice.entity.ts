import { Product } from './../../products/entities/product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  ManyToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Client } from 'src/clients/entities/client.entity';
@Entity({
  name: 'invoices',
})
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.invoice)
  user: User;

  @ManyToOne(() => Client, (client) => client.invoice)
  client: Client;

  @Column({
    type: 'decimal',
  })
  amount: number;

  @ManyToMany(() => Product, (product) => product.invoices)
  products: Product[];
}
