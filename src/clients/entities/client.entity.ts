import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity({
  name: 'clients',
})
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  name: string;

  @Column({
    unique: true,
    type: 'text',
    nullable: false,
  })
  username: string;

  @Column({
    unique: true,
    type: 'text',
    nullable: false,
  })
  email: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  password: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  dni: string;

  @OneToMany(() => Invoice, (invoice) => invoice.client)
  invoice: Invoice;
}
