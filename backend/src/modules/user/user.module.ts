import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Playlist } from '../playlist/playlist.model';
import { PlaylistModule } from '../playlist/playlist.module';

@Module({
  imports: [SequelizeModule.forFeature([User, Playlist]), PlaylistModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
