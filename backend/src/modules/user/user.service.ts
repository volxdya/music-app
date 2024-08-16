import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/createUserDto';
import { PlaylistService } from '../playlist/playlist.service';
import * as bcrypt from 'bcrypt';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Genre } from '../genre/genre.model';
import { Track } from '../track/track.model';

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
        include: [Track]
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
    const user: User = await this.cacheManager.get(`user/${login}`);

    if (!user) {
      const user: User = await this.userRepository.findOne({
        where: { login },
        include: { all: true },
      });

      if (user) {
        await this.cacheManager.set(`user/${login}`, user);
      }
      return user;
    }

    return user;
  }

  async getById(userId: number) {
    const user: User = await this.cacheManager.get(`user/${userId}`);

    if (!user) {
      const user = await this.userRepository.findOne({
        where: { id: userId },
        include: { all: true },
      });

      if (user) {
        await this.cacheManager.set(`user/${userId}`, user);
      }

      return user;
    }

    return user;
  }


  // Алгоритм поиска похожих авторов
  async getSimilarAuthors(authorId: number) {
    const user: User = await this.getById(authorId);

    if (!user.isUser) {
      const similarAuthors: User[] = await this.cacheManager.get(`similar/${authorId}`);

      if (!similarAuthors) {
        const genreIds: number[] = [];

        for (let i = 0; i < user.tracks.length; i++) {
          genreIds.push(user.tracks[i].genreId);
        }

        const uniqueGenres = [...new Set(genreIds)];
        const authors: User[] = await this.getAllAuthors();
        const finishAuthors: User[] = [];

        for (let i = 0; i < authors.length; i++) {
          for (let j = 0; j < authors[i].tracks.length; j++) {
            if (uniqueGenres.filter(genre => genre === authors[i].tracks[j].genreId)) {
              finishAuthors.push(authors[i]);
            }
          }
        }

        const uniqueAuthors: User[] = [... new Set(finishAuthors)];
        await this.cacheManager.set(`similar/${authorId}`, uniqueAuthors);

        return uniqueAuthors;
      }

      return similarAuthors;
    }

    return new HttpException("Вы пытаетесь найти не автора, а обычного пользователя", HttpStatus.BAD_REQUEST);
  }
}
