import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindAllUsersService } from '../services/find-all-users.service';

@ApiTags('Users')
@Controller('users')
export class FindAllUsersController {
  constructor(private service: FindAllUsersService) {}

  @Get()
  @ApiOperation({ summary: 'List all users' })
  async handle() {
    return await this.service.execute();
  }
}
