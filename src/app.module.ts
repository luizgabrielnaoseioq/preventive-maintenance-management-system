import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleModules } from './modules/modules.module';

@Module({
  imports: [ModuleModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
