import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateEquipmentDto {
  @ApiProperty({ example: 'Máquina de lavar louça' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'Ela lava a louça automaticamente' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'uuid-do-cliente' })
  @IsUUID('4', { message: 'clientId deve ser um UUID válido' })
  clientId: string;
}
