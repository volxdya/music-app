import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from './genre.model';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class GenreService {
  // Инициализация зависимостей

  constructor(
    @InjectModel(Genre) private readonly genreRepository: typeof Genre,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  /*
              Создание жанра, чуть позже стоит добавить самописные декораторы, для ролей пользователя.
              По админке только сможем добавлять 
            */

  async create(title: string) {
    return await this.genreRepository.create(title);
  }

  // Получение всех жанров
  async getAll() {
    const genres = await this.cacheManager.get(`genres`);

    if (!genres) {
      const genres = await this.genreRepository.findAll({});

      await this.cacheManager.set(`genres`, genres);

      return genres;
    }

    return genres;
  }

  // Получение одного жанра по названию
  async getOne(title: string) {
    return await this.genreRepository.findOne({
      where: { title },
    });
  }
}
