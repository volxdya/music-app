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
import { Author } from '../author/author.model';
import { Album } from '../album/album.model';

interface ITrack {
  title: string;
  avatarUrl: string;
  trackUrl: string;
  // НАСТРОЕНИЕ ТРЕКА
}

@Table({ tableName: 'track' })
export class Track extends Model<Track, ITrack> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, defaultValue: '' })
  avatarUrl: string;

  @Column({ type: DataType.STRING, defaultValue: '' })
  trackUrl: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  auditions: number;

  @BelongsToMany(() => Playlist, () => PlaylistTracks)
  playlists: Playlist[];

  @ForeignKey(() => Author)
  @Column({ type: DataType.INTEGER })
  authorId: number;

  @BelongsTo(() => Author)
  author: Author;

  @ForeignKey(() => Album)
  @Column({ type: DataType.INTEGER })
  albumId: number;

  @BelongsTo(() => Album)
  album: Album;
}
