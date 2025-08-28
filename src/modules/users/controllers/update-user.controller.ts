import { Body, Controller, Param, ParseIntPipe, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UpdateUserService } from '../services/update-user.service';

@ApiTags('Users')
@Controller('users')
export class UpdateUserController {
  constructor(private service: UpdateUserService) {}

  @Put(':id')
  @ApiOperation({ summary: 'Update user by id' })
  async handle(
    @Param('id', ParseIntPipe) id: string,
    @Body() body: UpdateUserDto,
  ) {
    return await this.service.execute(id, body);
  }
}
