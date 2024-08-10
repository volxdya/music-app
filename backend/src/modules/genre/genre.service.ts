import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from './genre.model';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class GenreService {
  constructor(
    @InjectModel(Genre) private readonly genreRepository: typeof Genre,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async create(title: string) {
    return await this.genreRepository.create(title);
  }

  async getAll() {
    const genres = await this.cacheManager.get(`genres`);

    if (!genres) {
      const genres = await this.genreRepository.findAll({});

      await this.cacheManager.set(`genres`, genres);

      return genres;
    }

    return genres;
  }

  async getOne(title: string) {
    return await this.genreRepository.findOne({
      where: { title },
    });
  }
}
