import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Track } from './track.model';
import { Playlist } from '../playlist/playlist.model';
import { PlaylistTracks } from './playlist-tracks.model';
import { Author } from '../author/author.model';
import { Album } from '../album/album.model';
import { AlbumModule } from '../album/album.module';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Track,
      Playlist,
      PlaylistTracks,
      Author,
      Album,
    ]),
    AlbumModule,
  ],
  providers: [TrackService],
  controllers: [TrackController],
  exports: [TrackService],
})
export class TrackModule {}
