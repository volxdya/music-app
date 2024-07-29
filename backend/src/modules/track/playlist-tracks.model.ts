import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Playlist } from '../playlist/playlist.model';
import { Track } from './track.model';

interface IPlaylistTracks {
  userId: number;
  roleId: number;
}

@Table({ tableName: 'playlist_tracks' })
export class PlaylistTracks extends Model<PlaylistTracks, IPlaylistTracks> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ForeignKey(() => Track)
  @Column({ type: DataType.INTEGER })
  trackId: number;

  @ForeignKey(() => Playlist)
  @Column({ type: DataType.INTEGER })
  playlistId: number;
}
