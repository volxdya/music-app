import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { TrackModule } from '../track/track.module';
import { AlbumModule } from '../album/album.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, TrackModule, AlbumModule],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
