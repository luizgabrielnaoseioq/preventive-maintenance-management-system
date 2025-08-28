import { Module } from '@nestjs/common';
import { CreateEquipmentController } from './controllers/create-equipment.controller';
import { CreateEquipmentService } from './services/create-equipment.service';
import { PrismaService } from '../prisma/prisma.service';
import { FindAllEquipmentsController } from './controllers/find-all-equipments.controller';
import { FindAllEquipmentsService } from './services/find-all-equipments.service';

@Module({
  controllers: [CreateEquipmentController, FindAllEquipmentsController],
  providers: [CreateEquipmentService, FindAllEquipmentsService, PrismaService],
})
export class EquipmentModule {}
