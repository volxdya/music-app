import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { JWT_CONFIG } from '../../config/jwt.config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [forwardRef(() => UserModule), JwtModule.register(JWT_CONFIG)],
  exports: [UserModule, JwtModule],
})
export class AuthModule {}
