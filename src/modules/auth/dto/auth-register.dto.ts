import { ApiProperty, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { UserRole } from 'generated/prisma';

export class AuthRegisterDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: UserRole;
}
