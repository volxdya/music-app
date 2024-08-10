import { Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Genre } from './genre.model';
import { Track } from '../track/track.model';

@Module({
  imports: [SequelizeModule.forFeature([Genre, Track])],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
