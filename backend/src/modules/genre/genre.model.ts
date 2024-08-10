import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Track } from '../track/track.model';

interface IGenre {
  title: string;
}

@Table({ tableName: 'genre' })
export class Genre extends Model<Genre, IGenre> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  title: string;

  @HasMany(() => Track)
  tracks: Track[];
}
