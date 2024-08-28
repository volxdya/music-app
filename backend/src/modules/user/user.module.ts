import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Playlist } from '../playlist/playlist.model';
import { PlaylistModule } from '../playlist/playlist.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONFIG } from '../../config/jwt.config';
import { Subscription } from '../subscription/subscription.model';
import { SubscriptionModule } from '../subscription/subscription.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Playlist, Subscription]),
    PlaylistModule,
    SubscriptionModule,
    JwtModule.register(JWT_CONFIG),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
