import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class DeleteUserService {
  constructor(private prisma: PrismaService) {}

  async execute(id: string) {
    const exists = await this.prisma.user.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException(`User with id ${id} not found`);

    return this.prisma.user.delete({ where: { id } });
  }
}
