import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserService } from '../services/create-user.service';

@ApiTags('Users')
@Controller('users')
export class CreateUserController {
  constructor(private service: CreateUserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  async handle(@Body() body: CreateUserDto) {
    return await this.service.execute(body);
  }
}
