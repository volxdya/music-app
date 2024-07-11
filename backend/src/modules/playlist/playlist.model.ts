import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {User} from "../user/user.model";
import {PlaylistTracks} from "../track/playlist-tracks.model";
import {Track} from "../track/track.model";

interface IPlaylist {
    title: string;
    description: string;
    userId: number;
    avatarUrl: string;
    likes: number;
}

@Table({tableName: "playlist"})
export class Playlist extends Model<Playlist, IPlaylist> {
    @Column({type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, defaultValue: ""})
    description: string;

    @Column({type: DataType.STRING, defaultValue: ""})
    avatarUrl: string;

    @Column({type: DataType.INTEGER, defaultValue: 0})
    likes: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number

    @BelongsTo(() => User)
    user: User

    @BelongsToMany(() => Track, () => PlaylistTracks)
    tracks: Track[]
}