import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateEquipmentDto } from '../dto/create-equipmetnt.dto';

@Injectable()
export class CreateEquipmentService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(data: CreateEquipmentDto) {
    // 🔹 valida se o client existe na tabela User
    const client = await this.prisma.user.findUnique({
      where: { id: data.clientId },
    });

    if (!client) {
      throw new NotFoundException('Cliente não encontrado!');
    }

    // 🔹 cria o equipamento
    return this.prisma.equipment.create({
      data: {
        name: data.name,
        description: data.description,
        clientId: data.clientId,
      },
    });
  }
}
