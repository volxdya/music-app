import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Track } from '../track/track.model';
import { Album } from '../album/album.model';
import { ApiProperty } from '@nestjs/swagger';

interface IGenre {
  title: string;
}

@Table({ tableName: 'genre' })
export class Genre extends Model<Genre, IGenre> {
  @ApiProperty({ description: 'ID жанра', example: '1'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ description: 'Название жанра', example: 'Поп'})
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  title: string;

  @ApiProperty({ description: 'Массив треков, принадлежащий жанру', example: '[{...}, {...}]'})
  @HasMany(() => Track)
  tracks: Track[];

  @ApiProperty({ description: 'Массив альбомов, принадлежащий жанру', example: '[{...}, {...}]'})
  @HasMany(() => Album)
  albums: Album[];
}
