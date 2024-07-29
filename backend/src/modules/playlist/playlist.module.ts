import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Playlist } from './playlist.model';
import { User } from '../user/user.model';
import { PlaylistTracks } from '../track/playlist-tracks.model';
import { TrackModule } from '../track/track.module';


@Module({
  imports: [
    SequelizeModule.forFeature([Playlist, User, PlaylistTracks]),
    TrackModule,
  ],
  controllers: [PlaylistController],
  providers: [PlaylistService],
  exports: [PlaylistService],
})
export class PlaylistModule {}
