import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteUserService } from '../services/delete-user.service';

@ApiTags('Users')
@Controller('users')
export class DeleteUserController {
  constructor(private service: DeleteUserService) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by id' })
  async handle(@Param('id') id: string) {
    return await this.service.execute(id);
  }
}
