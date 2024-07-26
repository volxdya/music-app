import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Album } from './album.model';
import { CreateAlbumDto } from './dto/createAlbumDto';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album) private readonly albumRepository: typeof Album,
  ) {}

  async create(dto: CreateAlbumDto) {
    const album: Album = await this.albumRepository.create(dto);

    return album;
  }

  async getAll() {
    const albums: Album[] = await this.albumRepository.findAll({
      include: { all: true },
    });

    return albums;
  }
}
