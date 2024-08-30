import { SequelizeModuleOptions } from '@nestjs/sequelize';

import * as dotenv from 'dotenv';
import { User } from '../modules/user/user.model';
import { Playlist } from '../modules/playlist/playlist.model';
import { PlaylistTracks } from '../modules/track/playlist-tracks.model';
import { Track } from '../modules/track/track.model';
import { Album } from '../modules/album/album.model';
import { Genre } from '../modules/genre/genre.model';
import { Subscription } from '../modules/subscription/subscription.model';

dotenv.config();

export const POSTGRES_CONFIG: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_NAME,
  autoLoadModels: true,
  models: [User, Playlist, PlaylistTracks, Track, Album, Genre, Subscription],
};
