import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Author } from './author.model';
import { CreateUserDto } from '../user/dto/createUserDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author) private readonly authorRepository: typeof Author,
  ) {}

  async create(dto: CreateUserDto) {
    const author = await this.authorRepository.create(dto);

    await author.update({
      password: bcrypt.hashSync(author.password, 12),
    });

    return author;
  }

  async getOne(login: string) {
    const author: Author = await this.authorRepository.findOne({
      where: { login },
      include: { all: true },
    });

    return author;
  }

  async getById(id: number) {
    const author: Author = await this.authorRepository.findOne({
      where: { id },
    });

    return author;
  }

  async getAll() {
    const authors: Author[] = await this.authorRepository.findAll({
      include: { all: true },
    });

    return authors;
  }

  async search(title: string) {
    const authors: Author[] = await this.authorRepository.findAll({
      include: { all: true },
    });

    const filtredAuthors: Author[] = authors.filter((item) =>
      item.login.toLowerCase().includes(title.toLowerCase()),
    );
    return filtredAuthors;
  }
}
