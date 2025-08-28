import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { EquipmentModule } from './equipment/equipment.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, EquipmentModule, AuthModule],
})
export class ModuleModules {}
