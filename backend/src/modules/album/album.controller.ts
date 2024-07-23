import {Body, Controller, Get, Post} from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/createAlbumDto';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get(`/get_all`)
  getAll() {
    return this.albumService.getAll();
  }

  @Post(`/create`)
  create(@Body() dto: CreateAlbumDto) {
    return this.albumService.create(dto);
  }
}
