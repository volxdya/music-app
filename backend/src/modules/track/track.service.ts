import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Track } from './track.model';
import { CreateTrackDto } from './dto/createTrackDto';
import { AlbumService } from '../album/album.service';
import { Album } from '../album/album.model';
import axios, { AxiosRequestConfig } from 'axios';
import * as process from 'node:process';
import { User } from '../user/user.model';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track) private readonly trackRepository: typeof Track,
    private readonly albumService: AlbumService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) { }

  async create(dto: CreateTrackDto) {
    if (dto.isTrack) {
      const track: Track = await this.trackRepository.create(dto);

      const newAlbum: Album = await this.albumService.create({
        title: dto.title,
        avatarUrl: dto.avatarUrl,
        authorId: dto.authorId,
      });

      await newAlbum.$set('tracks', track);

      await newAlbum.update({
        avatarUrl: dto.avatarUrl,
      });

      await track.update({
        albumId: newAlbum.id,
      });

      track.albumId = newAlbum.id;

      return track;
    }

    return await this.trackRepository.create(dto);
  }

  async getAll() {
    const tracks: Track[] = await this.cacheManager.get('tracks');

    if (!tracks) {
      const tracks: Track[] = await this.trackRepository.findAll({ include: [Album, User] });
      await this.cacheManager.set('tracks', tracks);

      return tracks;
    }

    return tracks;
  }

  async getById(trackId: number) {
    return await this.trackRepository.findOne({
      where: { id: trackId },
      include: { all: true },
    });
  }

  async getTracksByAuthor(authorId: number) {
    return await this.trackRepository.findAll({
      where: { authorId },
      include: [User, Album],
    });
  }

  async getChart() {
    return this.trackRepository.findAll({
      order: [
        ['auditions', 'DESC'],
        // ['createdAt', 'DESC'],
      ],
      limit: 50,
    });
  }

  async listen(trackId: number) {
    const track = await this.getById(trackId);

    await track.update({
      auditions: track.auditions + 1,
    });

    return track;
  }

  async delete(trackId: number) {
    const track: Track = await this.trackRepository.findOne({
      where: { id: trackId },
    });

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${process.env.BYTESCALE_API_KEY}`,
      },
    };

    const url: string = `https://api.bytescale.com/v2/accounts/${track.trackData.accountId}/files?filePath=`;

    await axios.delete(`${url}${track.trackData.filePathAvatar}`, config);
    await axios.delete(`${url}${track.trackData.filePathMP3}`, config);
    await this.albumService.delete(track.albumId);

    await track.destroy();

    return track;
  }
}
