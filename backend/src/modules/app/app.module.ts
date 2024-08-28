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
import { CacheModule } from '@nestjs/cache-manager';
import { REDIS_CONFIG } from 'src/config/redis.config';
import { GenreModule } from '../genre/genre.module';
import { FilesModule } from '../files/files.module';
import { STATIC_CONFIG } from '../../config/static.config';
import { MulterModule } from '@nestjs/platform-express';
import { SubscriptionModule } from '../subscription/subscription.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    STATIC_CONFIG,
    MulterModule.register({
      dest: '../../static',
    }),
    SequelizeModule.forRoot(DB_CONFIG),
    CacheModule.register(REDIS_CONFIG),
    UserModule,
    PlaylistModule,
    TrackModule,
    AuthModule,
    AlbumModule,
    SearchModule,
    GenreModule,
    FilesModule,
    SubscriptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
