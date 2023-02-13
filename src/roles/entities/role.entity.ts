import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Privilege } from '../../privileges/entities/privilege.entity';
@Entity({
  name: 'roles',
})
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  user: User;

  @ManyToMany(() => Privilege, (privilege) => privilege.roles)
  privileges: Privilege[];
}

// https://orkhan.gitbook.io/typeorm/docs/many-to-many-relations
