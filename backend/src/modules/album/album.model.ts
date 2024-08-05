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

interface IAlbum {
  title: string;
  avatarUrl: string;
}

@Table({ tableName: 'album' })
export class Album extends Model<Album, IAlbum> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  avatarUrl: string;

  @HasMany(() => Track)
  tracks: Track[];

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  authorId: number;

  @BelongsTo(() => User)
  author: User;

  @Column({ type: DataType.STRING, defaultValue: 'album' })
  type: string;
}
