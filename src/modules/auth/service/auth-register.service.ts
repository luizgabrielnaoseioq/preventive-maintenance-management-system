import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthRegisterService {
  constructor(private prismaService: PrismaService) {}

  async execute(data: AuthRegisterService) {
    const hashedPassword = bcrypt.hash(data.password);
  }
}
