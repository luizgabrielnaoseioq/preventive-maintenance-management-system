import { Module } from '@nestjs/common';
import { FindAllUsersController } from './controllers/find-all-users.controller';
import { FindAllUsersService } from './services/find-all-users.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FindAllUsersController],
  providers: [FindAllUsersService, PrismaService],
})
export class UserModule {}
