import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {DB_CONFIG} from "../../config/db.config";
import {UserModule} from "../user/user.module";
import {PlaylistModule} from "../playlist/playlist.module";
import {TrackModule} from "../track/track.module";
import {AuthorModule} from "../author/author.module";
import {AuthModule} from "../auth/auth.module";
import {AlbumModule} from "../album/album.module";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true,
      }),
      SequelizeModule.forRoot(DB_CONFIG),
      UserModule,
      PlaylistModule,
      TrackModule,
      AuthorModule,
      AuthModule,
      AlbumModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
