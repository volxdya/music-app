import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ISubscription {
  title: string;
  duration: number;
  price: number;
}

@Table({ tableName: 'subscription' })
export class Subscription extends Model<Subscription, ISubscription> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  title: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  duration: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  price: string;
}
