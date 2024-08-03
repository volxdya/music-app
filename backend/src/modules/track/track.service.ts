import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Track } from './track.model';
import { CreateTrackDto } from './dto/createTrackDto';
import { AlbumService } from '../album/album.service';
import { Album } from '../album/album.model';
import { Author } from '../author/author.model';
import axios, { AxiosRequestConfig } from 'axios';
import * as process from 'node:process';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track) private readonly trackRepository: typeof Track,
    private readonly albumService: AlbumService,
  ) {}

  async create(dto: CreateTrackDto) {
    if (dto.isTrack) {
      const newAlbum: Album = await this.albumService.create({
        title: dto.title,
        avatarUrl: dto.avatarUrl,
        authorId: dto.authorId,
      });

      const track: Track = await this.trackRepository.create(dto);

      await track.update({
        albumId: newAlbum.id,
      });

      track.albumId = newAlbum.id;

      return track;
    }

    return await this.trackRepository.create(dto);
  }

  async getAll() {
    return this.trackRepository.findAll({ include: [Album, Author] });
  }

  async getById(trackId: number) {
    return await this.trackRepository.findOne({
      where: { id: trackId },
      include: { all: true },
    });
  }

  async search(title: string) {
    const tracks: Track[] = await this.trackRepository.findAll({
      include: { all: true },
    });

    const filtredTracks: Track[] = tracks.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase()),
    );
    return filtredTracks;
  }

  async getTracksByAuthor(authorId: number) {
    return await this.trackRepository.findAll({
      where: { authorId },
      include: [Author, Album],
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
