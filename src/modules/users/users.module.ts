import { Module } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateUserController } from './controllers/create-user.controller';
import { FindAllUsersController } from './controllers/find-all-users.controller';
import { FindOneUserController } from './controllers/find-one-user.controller';
import { UpdateUserController } from './controllers/update-user.controller';
import { DeleteUserController } from './controllers/delete-user.controller';

import { CreateUserService } from './services/create-user.service';
import { FindAllUsersService } from './services/find-all-users.service';
import { FindOneUserService } from './services/find-one-user.service';
import { UpdateUserService } from './services/update-user.service';
import { DeleteUserService } from './services/delete-user.service';

@Module({
  controllers: [
    CreateUserController,
    FindAllUsersController,
    FindOneUserController,
    UpdateUserController,
    DeleteUserController,
  ],
  providers: [
    PrismaService,
    CreateUserService,
    FindAllUsersService,
    FindOneUserService,
    UpdateUserService,
    DeleteUserService,
  ],
})
export class UserModule {}
