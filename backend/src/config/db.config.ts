import {SequelizeModuleOptions} from "@nestjs/sequelize";

import * as dotenv from "dotenv";
import {User} from "../modules/user/user.model";
import {Playlist} from "../modules/playlist/playlist.model";
import {PlaylistTracks} from "../modules/track/playlist-tracks.model";
import {Track} from "../modules/track/track.model";

dotenv.config();

export const DB_CONFIG: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadModels: true,
    models: [User, Playlist, PlaylistTracks, Track],
}