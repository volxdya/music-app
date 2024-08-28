import {Column, DataType, HasMany, Model, Table} from 'sequelize-typescript';
import {User} from "../user/user.model";

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
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  duration: number;

  @Column({ type: DataType.STRING, allowNull: false })
  price: number;

  @HasMany(() => User)
  users: User[]
}
