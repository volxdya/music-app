import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { AuthorModule } from '../author/author.module';
import { TrackModule } from '../track/track.module';
import { AlbumModule } from '../album/album.module';

@Module({
  imports: [AuthorModule, TrackModule, AlbumModule],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
