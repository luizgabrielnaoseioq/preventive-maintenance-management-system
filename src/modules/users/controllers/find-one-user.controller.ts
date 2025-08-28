import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindOneUserService } from '../services/find-one-user.service';

@ApiTags('Users')
@Controller('users')
export class FindOneUserController {
  constructor(private service: FindOneUserService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  async handle(@Param('id') id: string) {
    return await this.service.execute(id);
  }
}
