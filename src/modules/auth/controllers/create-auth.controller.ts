import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthLoginDto } from '../dto/auth-login.dto';
import { AuthLoginService } from '../service/auth-login.service';

@ApiTags('Auth')
@Controller('auth/login')
export class AuthLoginController {
  constructor(private service: AuthLoginService) {}

  @Post()
  @ApiOperation({ summary: 'Auth Login' })
  async handle(@Body() body: AuthLoginDto) {
    return await this.service.login(body);
  }
}
