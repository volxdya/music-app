import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/createTrackDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Track')
@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @ApiOperation({summary: 'Получение массива всех треков'})
  @Get(`/get_all`)
  getAll() {
    return this.trackService.getAll();
  }

  @ApiOperation({summary: 'Создание трека'})
  @Post(`/create`)
  create(@Body() dto: CreateTrackDto) {
    return this.trackService.create(dto);
  }

  @ApiOperation({summary: 'Получение трека по ID'})
  @Get(`/get_by_id/:trackId`)
  getById(@Param('trackId') id: number) {
    return this.trackService.getById(id);
  }

  @ApiOperation({summary: 'Получение трека по ID автора'})
  @Get(`/get_by_authorId/:authorId`)
  getByAuthorId(@Param('authorId') authorId: number) {
    return this.trackService.getTracksByAuthor(authorId);
  }

  @ApiOperation({summary: 'Получение самых популярных треков'})
  @Get(`/get_chart`)
  getChart() {
    return this.trackService.getChart();
  }

  @ApiOperation({summary: 'Прослушивание трека ( +1 ) к прослушиваниям'})
  @Post(`/listen/:trackId`)
  listen(@Param('trackId') trackId: number) {
    return this.trackService.listen(trackId);
  }

  @ApiOperation({summary: 'Удаление трека по ID'})
  @Delete(`/delete/:trackId`)
  delete(@Param(`trackId`) trackId: number) {
    return this.trackService.delete(trackId);
  }
}
