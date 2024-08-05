import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Album } from './album.model';
import { Track } from '../track/track.model';
import { User } from '../user/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Album, Track, User])],
  providers: [AlbumService],
  controllers: [AlbumController],
  exports: [AlbumService],
})
export class AlbumModule {}
