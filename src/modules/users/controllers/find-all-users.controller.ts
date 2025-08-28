import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindAllUsersService } from '../services/find-all-users.service';
import { AuthGuard } from 'src/modules/jwt/jwt-auth.guard';

@ApiTags('Users')
@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('users')
export class FindAllUsersController {
  constructor(private service: FindAllUsersService) {}

  @Get()
  @ApiOperation({ summary: 'List all users' })
  async handle() {
    return await this.service.execute();
  }
}
