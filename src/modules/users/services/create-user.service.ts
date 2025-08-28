import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { userSchema } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
  constructor(private prisma: PrismaService) {}

  async execute(data: CreateUserDto) {
    const parsed = userSchema.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.format());
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
        password: hashedPassword,
      },
    });
  }
}
