import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/createUserDto';
import { PlaylistService } from '../playlist/playlist.service';
import * as bcrypt from 'bcrypt';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly playlistService: PlaylistService,
  ) { }

  async getAll() {
    const users: User[] = await this.userRepository.findAll({
      include: { all: true },
    });

    return users;
  }

  async getAllAuthors() {
    const authors: User[] = await this.cacheManager.get('authors');

    if (!authors) {
      const authors: User[] = await this.userRepository.findAll({
        where: { isUser: false },
      });

      await this.cacheManager.set('authors', authors);
      return authors;
    }

    return authors;
  }

  async create(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const playlist = await this.playlistService.create({
      userId: user.id,
      title: 'Мне нравится',
      description: '',
      avatarUrl: '',
      likes: 0,
    });

    await user.$set('playlists', [playlist]);
    user.playlists = [playlist];

    await user.update({
      password: bcrypt.hashSync(user.password, 12),
    });

    return user;
  }

  async getOne(login: string) {
    const user = await this.userRepository.findOne({
      where: { login },
      include: { all: true },
    });

    return user;
  }

  async getById(userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      include: { all: true },
    });

    return user;
  }
}
