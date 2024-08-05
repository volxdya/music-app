import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { DB_CONFIG } from '../../config/db.config';
import { UserModule } from '../user/user.module';
import { PlaylistModule } from '../playlist/playlist.module';
import { TrackModule } from '../track/track.module';
import { AuthModule } from '../auth/auth.module';
import { AlbumModule } from '../album/album.module';
import { SearchModule } from '../search/search.module';

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
    AuthModule,
    AlbumModule,
    SearchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
