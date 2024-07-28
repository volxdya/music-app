import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { CreatePlaylistDto } from './dto/createPlaylistDto';
import { AddToPlaylistDto } from './dto/addToPlaylistDto';
import {CheckLikeDto} from "./dto/checkLikeDto";

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post(`/create`)
  async createPlaylist(@Body() dto: CreatePlaylistDto) {
    return this.playlistService.create(dto);
  }

  @Get(`/get_by_id/:playlistId`)
  getBy_id(@Param('playlistId') id: number) {
    return this.playlistService.getById(id);
  }

  @Post(`/add_track`)
  addTrack(@Body() dto: AddToPlaylistDto) {
    return this.playlistService.addTrack(dto);
  }

  @Post(`/check_like`)
  checkLike(@Body() dto: CheckLikeDto) {
    return this.playlistService.checkTrackLike(dto);
  }
}
