import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateEquipmentDto {
  @ApiPropertyOptional({ example: 'Maquita' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'Corta tudo que passar perto' })
  @IsOptional()
  @IsString()
  description?: string;
}
