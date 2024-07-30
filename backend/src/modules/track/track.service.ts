import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Track } from './track.model';
import { CreateTrackDto } from './dto/createTrackDto';
import { AlbumService } from '../album/album.service';
import { Album } from '../album/album.model';
import { Author } from '../author/author.model';

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

    const track: Track = await this.trackRepository.create(dto);

    return track;
  }

  async getAll() {
    return this.trackRepository.findAll({ include: [Album, Author] });
  }

  async getById(trackId: number) {
    const track: Track = await this.trackRepository.findOne({
      where: { id: trackId },
      include: { all: true },
    });

    return track;
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
    const tracks: Track[] = await this.trackRepository.findAll({
      where: { authorId },
      include: [Author, Album],
    });

    return tracks;
  }

  async getChart() {
    const tracks = this.trackRepository.findAll({
      order: [
        ['auditions', 'DESC'],
        // ['createdAt', 'DESC'],
      ],
      limit: 3,
    });

    return tracks;
  }
}
