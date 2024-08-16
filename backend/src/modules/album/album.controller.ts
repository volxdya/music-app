import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/createAlbumDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Album')
@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) { }

  @ApiOperation({ summary: 'Получение массива всех альбомов' })
  @Get(`/get_all`)
  getAll() {
    return this.albumService.getAll();
  }

  @ApiOperation({ summary: 'Создание альбома' })
  @Post(`/create`)
  create(@Body() dto: CreateAlbumDto) {
    return this.albumService.create(dto);
  }

  @ApiOperation({ summary: 'Получение одного альбома по ID' })
  @Get(`/get_by_id/:id`)
  getById(@Param('id') id: number) {
    return this.albumService.getById(id);
  }

  @ApiOperation({ summary: 'Удаление альбома по ID' })
  @Delete(`/delete/albumId=:albumId`)
  delete(@Param('albumId') albumId: number) {
    return this.albumService.delete(albumId);
  }
}
