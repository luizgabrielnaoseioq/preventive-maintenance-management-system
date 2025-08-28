import { Body, Controller, Post, Request } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateEquipmentService } from '../services/create-equipment.service';
import { CreateEquipmentDto } from '../dto/create-equipmetnt.dto';

@ApiTags('Equipments')
@Controller('equipments')
export class CreateEquipmentController {
  constructor(private service: CreateEquipmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Equipment' })
  async handle(@Body() body: CreateEquipmentDto) {
    return await this.service.execute(body);
  }
}
