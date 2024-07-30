import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get(`/search/:title`)
  search(@Param('title') title: string) {
    return this.albumService.search(title);
  }

  @Get(`/get_by_id/:id`)
  getById(@Param('id') id: number) {
    return this.albumService.getById(id);
  }
}
