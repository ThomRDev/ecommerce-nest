import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { In, Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Privilege } from '../privileges/entities/privilege.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(Privilege)
    private readonly privilegeRepository: Repository<Privilege>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    try {
      const { name, privileges = [] } = createRoleDto;

      if (!privileges.length) {
        const role = await this.roleRepository.save({
          name,
        });
        return role;
      }
      const privilegesEntities = await this.privilegeRepository.find({
        where: {
          id: In(privileges),
        },
      });
      if (!privilegesEntities.length) {
        throw new BadRequestException('Los privilegios no existen');
      }
      const role = await this.roleRepository.save({
        name,
        privileges: privilegesEntities,
      });
      return role;
    } catch (error) {
      throw new BadRequestException('error creating role');
    }
  }

  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
