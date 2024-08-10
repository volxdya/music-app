import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from './genre.model';

@Injectable()
export class GenreService {
  constructor(
    @InjectModel(Genre) private readonly genreRepository: typeof Genre,
  ) {}

  async create(title: string) {
    return await this.genreRepository.create(title);
  }

  async getAll() {
    return await this.genreRepository.findAll({ include: { all: true } });
  }

  async getOne(title: string) {
    return await this.genreRepository.findOne({
      where: { title },
    });
  }
}
