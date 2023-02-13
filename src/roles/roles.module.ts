import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role } from './entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivilegesModule } from '../privileges/privileges.module';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [TypeOrmModule.forFeature([Role]), PrivilegesModule, RolesModule],
  exports: [TypeOrmModule, RolesService],
})
export class RolesModule {}
