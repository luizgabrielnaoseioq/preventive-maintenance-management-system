import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, MinLength } from 'class-validator';
import { UserRole } from 'generated/prisma';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'Novo Nome' })
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ example: 'novo@email.com' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ enum: UserRole, example: 'technician' })
  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;

  @ApiPropertyOptional({ example: '654321' })
  @MinLength(6)
  @IsOptional()
  password?: string;
}
