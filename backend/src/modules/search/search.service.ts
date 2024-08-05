import { Injectable } from '@nestjs/common';
import { AlbumService } from '../album/album.service';
import { Album } from '../album/album.model';
import { Track } from '../track/track.model';
import { TrackService } from '../track/track.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Injectable()
export class SearchService {
  constructor(
    private readonly trackService: TrackService,
    private readonly albumService: AlbumService,
    private readonly userService: UserService,
  ) {}

  async search(value: string) {
    const tracks: Track[] = await this.trackService.getAll();
    const authors: User[] = await this.userService.getAll();
    const albums: Album[] = await this.albumService.getAll();

    type SearchableItem = { title?: string; login?: string };

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

    return [...filtedAuthors, ...authorsTrack, ...filtredTracks];
  }
}
