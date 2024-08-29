import { Injectable } from '@nestjs/common';
import { AlbumService } from '../album/album.service';
import { Album } from '../album/album.model';
import { Track } from '../track/track.model';
import { TrackService } from '../track/track.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Injectable()
export class SearchService {
  // Инициализация зависимостей
  constructor(
    private readonly trackService: TrackService,
    private readonly albumService: AlbumService,
    private readonly userService: UserService,
  ) {}

  // Поиск по значению, из INPUT'a
  async search(value: string) {
    // Получаем все сущности из сервисов
    const tracks: Track[] = await this.trackService.getAll();
    const authors: User[] = await this.userService.getAll();
    const albums: Album[] = await this.albumService.getAll();

    /* 
          Создаем тип, по которому будет производиться поиск,
          Для альбомо и треков: title,
          Для авторов: login
        */

    type SearchableItem = { title?: string; login?: string };

    // Функция поиска
    function searched<T extends SearchableItem>(items: T[], key: keyof T): T[] {
      return items.filter((item) => {
        const field = item[key];
        return (
          typeof field === 'string' &&
          field.toLowerCase().includes(value.toLowerCase())
        );
      });
    }

    const filtredTracks = searched(tracks, 'title');
    const authorsTrack = searched(authors, 'login');
    const filtedAuthors = searched(albums, 'title');

    // Возвращаем общий массив, все, что смогли найти
    return [...filtedAuthors, ...authorsTrack, ...filtredTracks];
  }
}
