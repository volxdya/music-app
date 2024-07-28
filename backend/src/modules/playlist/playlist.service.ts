import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Playlist } from './playlist.model';
import { CreatePlaylistDto } from './dto/createPlaylistDto';
import { TrackService } from '../track/track.service';
import { AddToPlaylistDto } from './dto/addToPlaylistDto';
import { Track } from '../track/track.model';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectModel(Playlist)
    private readonly playlistRepostitory: typeof Playlist,
    private readonly trackService: TrackService,
  ) {}

  async create(dto: CreatePlaylistDto) {
    const playlist: Playlist = await this.playlistRepostitory.create(dto);
    return playlist;
  }

  async getById(playlistId: number) {
    const playlist = await this.playlistRepostitory.findOne({
      include: [Track],
      where: { id: playlistId },
    });

    return playlist;
  }

  async addTrack(dto: AddToPlaylistDto) {
    const { trackId, playlistId } = dto;

    const track = await this.trackService.getById(trackId);

    const playlist = await this.getById(playlistId);
    await playlist.$add('tracks', track);

    return playlist;
  }
}
