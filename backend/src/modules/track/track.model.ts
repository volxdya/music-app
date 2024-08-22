import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Playlist } from '../playlist/playlist.model';
import { PlaylistTracks } from './playlist-tracks.model';
import { Album } from '../album/album.model';
import { User } from '../user/user.model';
import { Genre } from '../genre/genre.model';
import { ApiProperty } from '@nestjs/swagger';

interface ITrack {
  title: string;
  trackData: {
    accountId: string;
    filePathAvatar: string;
    fileUrlAvatar: string;
    filePathMP3: string;
    fileUrlMP3: string;
  };
  // НАСТРОЕНИЕ ТРЕКА
}

@Table({ tableName: 'track' })
export class Track extends Model<Track, ITrack> {
  @ApiProperty({ example: '1', description: 'ID трека' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Good Track', description: 'Название трека' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({
    example: '{...}',
    description: 'Данные трека для ByteScale API',
  })
  @Column({ type: DataType.JSON, allowNull: false })
  trackData: {
    accountId: string;
    filePathAvatar: string;
    fileUrlAvatar: string;
    filePathMP3: string;
    fileUrlMP3: string;
  };

  @ApiProperty({ example: '1233456', description: 'Прослушивания трека' })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  auditions: number;

  @ApiProperty({
    example: 'true',
    description:
      'Трек или нет, это для того, чтобы при создании чистого трека создавался к нему альбом',
  })
  @Column({ type: DataType.BOOLEAN })
  isTrack: boolean;

  @ApiProperty({
    example: '[...]',
    description: 'Массив плейлистов, в которых находится данный трек',
  })
  @BelongsToMany(() => Playlist, () => PlaylistTracks)
  playlists: Playlist[];

  @ApiProperty({ example: '1', description: 'ID автора' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ApiProperty({ example: '{...}', description: 'Автор трека' })
  @BelongsTo(() => User)
  author: User;

  @ApiProperty({ example: '1', description: 'ID Жанра' })
  @ForeignKey(() => Genre)
  @Column({ type: DataType.INTEGER })
  genreId: number;

  @ApiProperty({ example: '{...}', description: 'Жанр трека' })
  @BelongsTo(() => Genre)
  genre: Genre;

  @ApiProperty({ example: '1', description: 'ID альбома' })
  @ForeignKey(() => Album)
  @Column({ type: DataType.INTEGER })
  albumId: number;

  @ApiProperty({ example: '{...}', description: 'Альбом трека' })
  @BelongsTo(() => Album)
  album: Album;

  @ApiProperty({
    example: 'ALWAYS TRACK',
    description:
      'Данное поле используется исключительно на фронтенде, для поиска.',
    default: 'track',
  })
  @Column({ type: DataType.STRING, defaultValue: 'track' })
  type: string;
}
