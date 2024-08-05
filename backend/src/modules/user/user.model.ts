import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Playlist } from '../playlist/playlist.model';
import { Album } from '../album/album.model';
import { Track } from '../track/track.model';

interface IUser {
  firstName: string;
  lastName: string;
  login: string;
  avatarUrl: string;
  isSubscribed: boolean;
}

@Table({ tableName: 'user' })
export class User extends Model<User, IUser> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  login: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isSubscribed: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isUser: boolean;

  @HasMany(() => Playlist)
  playlists: Playlist[];

  @HasMany(() => Track)
  tracks: Track[];

  @HasMany(() => Album)
  albums: Album[];

  @Column({ type: DataType.STRING, defaultValue: 'user' })
  type: string;
}
