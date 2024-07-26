import {Column, DataType, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import { Track } from '../track/track.model';
import { Album } from '../album/album.model';

interface IAuthor {
  login: string;
  password: string;
}

@Table({ tableName: 'author' })
export class Author extends Model<Author, IAuthor> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  login: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @Column({ type: DataType.BOOLEAN })
  isUser: boolean;

  @HasMany(() => Track)
  tracks: Track[];

  @HasMany(() => Album)
  albums: Album[];
}
