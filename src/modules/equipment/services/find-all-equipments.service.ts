import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class FindAllEquipmentsService {
  constructor(private prismaService: PrismaService) {}

  async execute() {
    return await this.prismaService.equipment.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        clientId: true,
      },
    });
  }
}
