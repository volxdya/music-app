import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Track } from '../track/track.model';
import { User } from '../user/user.model';
import { Genre } from '../genre/genre.model';
import { ApiProperty } from '@nestjs/swagger';

interface IAlbum {
  title: string;
  avatarUrl: string;
}

@Table({ tableName: 'album' })
export class Album extends Model<Album, IAlbum> {
  @ApiProperty({ example: '1', description: 'Уникальный ID' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @ApiProperty({ example: 'Good Album', description: 'Название альбома' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({
    example: 'http://imagehost/test',
    description: 'Аватарка альбома',
  })
  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  avatarUrl: string;

  @ApiProperty({
    example: '[{...}]',
    description: 'Массив треков, принадлежащий альбому',
  })
  @HasMany(() => Track)
  tracks: Track[];

  @ApiProperty({ example: '1', description: 'ID владельца альбома' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ApiProperty({ example: '1', description: 'ID жанра альбома' })
  @ForeignKey(() => Genre)
  @Column({ type: DataType.INTEGER })
  genreId: number;

  @ApiProperty({ example: '{...}', description: 'Жанр' })
  @BelongsTo(() => Genre)
  genre: Genre;

  @ApiProperty({ example: '{...}', description: 'Владелец' })
  @BelongsTo(() => User)
  author: User;

  @ApiProperty({
    example: 'ALWAYS ALBUM',
    description:
      'Данное поле используется исключительно на фронтенде, для поиска.',
    default: 'album',
  })
  @Column({ type: DataType.STRING, defaultValue: 'album' })
  type: string;
}
