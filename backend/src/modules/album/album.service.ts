import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Album } from './album.model';
import { CreateAlbumDto } from './dto/createAlbumDto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album) private readonly albumRepository: typeof Album,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async create(dto: CreateAlbumDto) {
    return await this.albumRepository.create(dto);
  }

  async getAll() {
    const albums: Album[] = await this.cacheManager.get('albums');

    if (!albums) {
      const albums: Album[] = await this.albumRepository.findAll({ include: { all: true } });

      await this.cacheManager.set('albums', albums);
      
      return albums;
    }

    return albums;
  }

  async getById(id: number) {
    const album: Album = await this.cacheManager.get(`album/${id}`);

    if (!album) {
      const album: Album = await this.albumRepository.findOne({
        where: { id },
        include: { all: true },
      });

      if (album) {
        await this.cacheManager.set(`album/${id}`, album);
      }

      return album;
    }

    return album;
  }

  async delete(albumId: number) {
    await this.cacheManager.del(`album/${albumId}`);

    return await this.albumRepository.destroy({ where: { id: albumId } });
  }
}
