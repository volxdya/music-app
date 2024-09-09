import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { CreatePlaylistDto } from './dto/createPlaylistDto';
import { UsePlaylistDto } from './dto/usePlaylistDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../../guards/auth.guard';
import { CheckUserGuard } from '../../guards/check-user.guard';
import { PlaylistGuard } from '../../guards/playlist.guard';

@ApiTags('Playlist')
@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @ApiOperation({ summary: 'Создание плейлиста' })
  @Post(`/create`)
  @UseGuards(AuthGuard, CheckUserGuard)
  async createPlaylist(@Body() dto: CreatePlaylistDto) {
    return this.playlistService.create(dto);
  }

  @ApiOperation({ summary: 'Получение плейлиста по ID' })
  @Get(`/get_by_id/:playlistId`)
  getBy_id(@Param('playlistId') id: number) {
    return this.playlistService.getById(id);
  }

  @ApiOperation({ summary: 'Добавление трека в плейлист' })
  @Post(`/add_track`)
  @UseGuards(AuthGuard)
  addTrack(@Body() dto: UsePlaylistDto) {
    return this.playlistService.addTrack(dto);
  }

  @ApiOperation({ summary: 'Удаление трека из плейлиста' })
  @Delete(`/delete_track/:trackId/:playlistId`)
  @UseGuards(AuthGuard)
  deleteTrack(
    @Param('trackId') trackId: number,
    @Param('playlistId') playlistId: number,
  ) {
    return this.playlistService.deleteTrack(trackId, playlistId);
  }
}
