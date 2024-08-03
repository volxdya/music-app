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
    return await this.albumRepository.create(dto);
  }

  async getAll() {
    return await this.albumRepository.findAll({
      include: { all: true },
    });
  }

  async getById(id: number) {
    return await this.albumRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async search(title: string) {
    const albums: Album[] = await this.albumRepository.findAll({
      include: { all: true },
    });

    return albums.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase()),
    );
  }

  async delete(albumId: number) {
    return await this.albumRepository.destroy({ where: { id: albumId } });
  }
}
