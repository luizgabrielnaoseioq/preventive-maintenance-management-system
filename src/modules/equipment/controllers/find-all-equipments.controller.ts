import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindAllEquipmentsService } from '../services/find-all-equipments.service';

@ApiTags('Equipments')
@Controller('equipments')
export class FindAllEquipmentsController {
  constructor(private service: FindAllEquipmentsService) {}

  @Get()
  @ApiOperation({ summary: 'List all equipments' })
  async handle() {
    return await this.service.execute();
  }
}
