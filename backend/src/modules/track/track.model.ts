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
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.JSON, allowNull: false })
  trackData: {
    accountId: string;
    filePathAvatar: string;
    fileUrlAvatar: string;
    filePathMP3: string;
    fileUrlMP3: string;
  };

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  auditions: number;

  @BelongsToMany(() => Playlist, () => PlaylistTracks)
  playlists: Playlist[];

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  authorId: number;

  @BelongsTo(() => User)
  author: User;

  @ForeignKey(() => Album)
  @Column({ type: DataType.INTEGER })
  albumId: number;

  @BelongsTo(() => Album)
  album: Album;

  @Column({ type: DataType.STRING, defaultValue: 'track' })
  type: string;
}
