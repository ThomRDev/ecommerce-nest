import { Invoice } from './../../invoices/entities/invoice.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
@Entity({
  name: 'users',
})
export class User {
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
    unique: true,
  })
  dni: string;

  @ManyToOne(() => Role, (role) => role.user)
  role: Role;

  @OneToMany(() => Invoice, (invoice) => invoice.user)
  invoice: Invoice;
}
