import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { AuthLoginDto } from '../dto/auth-login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthLoginService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(data: AuthLoginDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new NotFoundException('Não foi possivel encotrar um usuario.');
    }

    const validator = bcrypt.compare(data.password, user.password);

    if (!validator) {
      throw new ConflictException('Credenciais invalidas.');
    }

    const payload = { sub: user.id, email: user.email };

    return {
      token: await this.jwtService.signAsync(payload, {
        secret: process.env.SECRET,
        expiresIn: '2 days',
      }),
    };
  }
}
