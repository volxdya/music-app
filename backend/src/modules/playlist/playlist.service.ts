import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Playlist } from './playlist.model';
import { CreatePlaylistDto } from './dto/createPlaylistDto';
import { TrackService } from '../track/track.service';
import { UsePlaylistDto } from './dto/usePlaylistDto';
import { Track } from '../track/track.model';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class PlaylistService {
  // Инициализация зависимостей

  constructor(
    @InjectModel(Playlist)
    private readonly playlistRepostitory: typeof Playlist,
    private readonly trackService: TrackService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  // Создание плейлиста
  async create(dto: CreatePlaylistDto) {
    return await this.playlistRepostitory.create(dto);
  }

  // Получение 1 плейлиста по ID
  async getById(playlistId: number) {
    const playlist: Playlist = await this.cacheManager.get(
      `playlist/${playlistId}`,
    );

    if (!playlist) {
      const playlist: Playlist = await this.playlistRepostitory.findOne({
        include: [Track],
        where: { id: playlistId },
      });

      await this.cacheManager.set(`playlist/${playlistId}`, playlist);

      return playlist;
    }

    return playlist;
  }

  // Добавление трека в плейлист
  async addTrack(dto: UsePlaylistDto) {
    const track: Track = await this.trackService.getById(dto.trackId);

    const playlist = await this.playlistRepostitory.findOne({
      include: [Track],
      where: { id: dto.playlistId },
    });

    await playlist.$add('tracks', track);
    await this.cacheManager.set(`playlist/${dto.playlistId}`, playlist);

    return playlist;
  }

  // Удаление трека из плейлиста
  async deleteTrack(trackId: number, playlistId: number) {
    const track = await this.trackService.getById(trackId);
    const playlist = await this.playlistRepostitory.findOne({
      where: { id: playlistId },
    });

    await playlist.$remove('tracks', track);

    return playlist;
  }
}
