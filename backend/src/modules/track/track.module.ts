import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Track } from './track.model';
import { Playlist } from '../playlist/playlist.model';
import { PlaylistTracks } from './playlist-tracks.model';
import { Album } from '../album/album.model';
import { AlbumModule } from '../album/album.module';
import { User } from '../user/user.model';
import { Genre } from '../genre/genre.model';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONFIG } from '../../config/jwt.config';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Track,
      Playlist,
      PlaylistTracks,
      Album,
      User,
      Genre,
    ]),
    JwtModule.register(JWT_CONFIG),
    AlbumModule,
  ],
  providers: [TrackService],
  controllers: [TrackController],
  exports: [TrackService],
})
export class TrackModule {}
