import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { PlaylistTracks } from '../track/playlist-tracks.model';
import { Track } from '../track/track.model';
import { ApiProperty } from '@nestjs/swagger';

interface IPlaylist {
  title: string;
  description: string;
  userId: number;
  avatarUrl: string;
  likes: number;
}

@Table({ tableName: 'playlist' })
export class Playlist extends Model<Playlist, IPlaylist> {
  @ApiProperty({ example: '1', description: 'ID плейлиста' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Мне нравится', description: 'Название плейлиста' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ example: 'Крутое описание', description: 'Описание плейлиста' })
  @Column({ type: DataType.STRING, defaultValue: '' })
  description: string;

  @ApiProperty({
    example: 'http://imagehost/playlistId=123',
    description: 'Ссылка на картинку плейлиста',
    default: '',
  })
  @Column({ type: DataType.STRING, defaultValue: '' })
  avatarUrl: string;

  @ApiProperty({
    example: '123',
    description: 'Количество лайков плейлиста',
    default: '0',
  })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  likes: number;

  @ApiProperty({ example: '1', description: 'ID автора плейлиста' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ApiProperty({ example: '{...}', description: 'Автор плейлиста' })
  @BelongsTo(() => User)
  user: User;

  @ApiProperty({ example: '[{...}, {...}]', description: 'Массив треков, добавленных в плейлист' })
  @BelongsToMany(() => Track, () => PlaylistTracks)
  tracks: Track[];
}
