import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Playlist } from './playlist.model';
import { CreatePlaylistDto } from './dto/createPlaylistDto';
import { TrackService } from '../track/track.service';
import { UsePlaylistDto } from './dto/usePlaylistDto';
import { Track } from '../track/track.model';
import { CheckLikeDto } from './dto/checkLikeDto';
import {Album} from "../album/album.model";
import {Author} from "../author/author.model";

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

  async addTrack(dto: UsePlaylistDto) {
    const track = await this.trackService.getById(dto.trackId);

    const playlist = await this.getById(dto.playlistId);
    await playlist.$add('tracks', track);

    return playlist;
  }

  async deleteTrack(trackId: number, playlistId: number) {
    const track = await this.trackService.getById(trackId);
    const playlist = await this.playlistRepostitory.findOne({
      where: { id: playlistId },
    });

    await playlist.$remove('tracks', track);

    return playlist;
  }

  async checkTrackLike(dto: CheckLikeDto) {
    const playlist = await this.playlistRepostitory.findOne({
      where: { id: dto.playlistId },
      include: [Track],
    });

    for (let i = 0; i < playlist.tracks.length; i++) {
      if (dto.trackId === playlist.tracks[i].id) {
        return true;
      }
    }

    return false;
  }
}
