import { forwardRef, Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Album } from './album.model';
import { Track } from '../track/track.model';
import { User } from '../user/user.model';
import { Genre } from '../genre/genre.model';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONFIG } from '../../config/jwt.config';
import { TrackModule } from '../track/track.module';
import {UserModule} from "../user/user.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Album, Track, User, Genre]),
    JwtModule.register(JWT_CONFIG),
    forwardRef(() => TrackModule),
  ],
  providers: [AlbumService],
  controllers: [AlbumController],
  exports: [AlbumService],
})
export class AlbumModule {}
