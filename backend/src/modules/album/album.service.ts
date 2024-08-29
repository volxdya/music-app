import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Album } from './album.model';
import { CreateAlbumDto } from './dto/createAlbumDto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AlbumService {
  // Инициализация зависимостей

  constructor(
    @InjectModel(Album) private readonly albumRepository: typeof Album,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  // Создание альбома
  async create(dto: CreateAlbumDto) {
    await this.cacheManager.del(`user/${dto.userId}`);

    return await this.albumRepository.create(dto);
  }

  // Получение всех альбомов
  async getAll() {
    const albums: Album[] = await this.cacheManager.get('albums');

    if (!albums) {
      const albums: Album[] = await this.albumRepository.findAll({
        include: { all: true },
      });

      await this.cacheManager.set('albums', albums);

      return albums;
    }

    return albums;
  }

  // Получение одного альбома по ID
  async getById(id: number) {
    const album: Album = await this.cacheManager.get(`album/${id}`);

    if (!album) {
      const album: Album = await this.albumRepository.findOne({
        where: { id },
        include: { all: true },
      });

      await this.cacheManager.set(`album/${id}`, album);

      return album;
    }

    return album;
  }

  // Удаление альбома
  async delete(albumId: number) {
    await this.cacheManager.del(`album/${albumId}`);

    return await this.albumRepository.destroy({ where: { id: albumId } });
  }
}
