import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
    }),
  ],
  providers: [JwtService],
  exports: [JwtModule],
})
export class JwtCustomModule {}
