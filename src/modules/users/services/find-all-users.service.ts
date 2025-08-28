import { PrismaService } from 'src/prisma/prisma.service';

export class FindAllUsersService {
  constructor(private prismaService: PrismaService) {}
}
