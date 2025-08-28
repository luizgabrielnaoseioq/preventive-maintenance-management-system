import { Module } from '@nestjs/common';
import { AuthLoginController } from './controllers/create-auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthLoginService } from './service/auth-login.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AuthLoginController],
  providers: [PrismaService, AuthLoginService, JwtService],
})
export class AuthModule {}
