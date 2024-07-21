import {Column, DataType, Model, Table} from "sequelize-typescript";

interface IAuthor {
    login: string;
    password: string;
}

@Table({tableName: 'author'})
export class Author extends Model<Author, IAuthor> {
    @Column({type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true, unique: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    login: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;
}