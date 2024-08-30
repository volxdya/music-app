import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Playlist } from '../playlist/playlist.model';
import { Album } from '../album/album.model';
import { Track } from '../track/track.model';
import { ApiProperty } from '@nestjs/swagger';
import { Subscription } from '../subscription/subscription.model';

interface IUser {
  firstName: string;
  lastName: string;
  login: string;
  avatarUrl: string;
  isSubscribed: boolean;
}

interface IFinishSubscibe {
  date: string;
  indexMonth: number;
  day: number;
}

@Table({ tableName: 'user' })
export class User extends Model<User, IUser> {
  @ApiProperty({ example: '1', description: 'ID пользователя' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Владислав', description: 'Имя пользователя' })
  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @ApiProperty({ example: 'Тестов', description: 'Фамилия пользователя' })
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @ApiProperty({ example: 'user', description: 'Логин пользователя' })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  login: string;

  @ApiProperty({ example: 'qwerty123zxc', description: 'Пароль пользователя' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({
    example: 'true',
    description: 'Пользователь подписан или нет?',
  })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isSubscribed: boolean;

  @ApiProperty({ example: 'true', description: 'Автор пользователь или нет?' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isUser: boolean;

  @ApiProperty({
    example: '[...]',
    description: 'Массив плейлистов пользователя',
  })
  @HasMany(() => Playlist)
  playlists: Playlist[];

  @ApiProperty({ example: '[...]', description: 'Массив треков пользователя' })
  @HasMany(() => Track)
  tracks: Track[];

  @ApiProperty({
    example: '[...]',
    description: 'Массив альбомов пользователя',
  })
  @HasMany(() => Album)
  albums: Album[];

  @ApiProperty({
    example: 'ALWAYS USER',
    description:
      'Данное поле используется исключительно на фронтенде, для поиска.',
    default: 'user',
  })
  @Column({ type: DataType.STRING, defaultValue: 'user' })
  type: string;

  @ApiProperty({
    example: '12 06 2024',
    description: 'Дата окончания подписки',
  })
  @Column({ type: DataType.JSON, defaultValue: null })
  finishSubscribe: IFinishSubscibe;

  @ForeignKey(() => Subscription)
  @Column({ type: DataType.INTEGER })
  subscriptionId: number;

  @BelongsTo(() => Subscription)
  subscription: Subscription;
}
