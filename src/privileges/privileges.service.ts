import { Injectable, BadRequestException } from '@nestjs/common';
import { CreatePrivilegeDto } from './dto/create-privilege.dto';
import { UpdatePrivilegeDto } from './dto/update-privilege.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Privilege } from './entities/privilege.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrivilegesService {
  constructor(
    @InjectRepository(Privilege)
    private readonly privilegeRepository: Repository<Privilege>,
  ) {}

  async create(createPrivilegeDto: CreatePrivilegeDto) {
    try {
      const privilege = await this.privilegeRepository.save(createPrivilegeDto);
      return privilege;
    } catch (err) {
      throw new BadRequestException('Error al crear un privilegio');
    }
  }

  findAll() {
    return `This action returns all privileges`;
  }

  findOne(id: number) {
    return `This action returns a #${id} privilege`;
  }

  update(id: number, updatePrivilegeDto: UpdatePrivilegeDto) {
    return `This action updates a #${id} privilege`;
  }

  remove(id: number) {
    return `This action removes a #${id} privilege`;
  }
}
