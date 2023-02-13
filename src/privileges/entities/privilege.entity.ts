import { Role } from 'src/roles/entities/role.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
} from 'typeorm';
@Entity({
  name: 'privileges',
})
export class Privilege {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  name: string;

  @ManyToMany(() => Role, (role) => role.privileges)
  @JoinTable()
  roles: Role[];
}

// https://orkhan.gitbook.io/typeorm/docs/many-to-many-relations
