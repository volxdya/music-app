import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/createTrackDto';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get(`/get_all`)
  getAll() {
    return this.trackService.getAll();
  }

  @Post(`/create`)
  create(@Body() dto: CreateTrackDto) {
    return this.trackService.create(dto);
  }

  @Get(`/get_by_id/:trackId`)
  getById(@Param('trackId') id: number) {
    return this.trackService.getById(id);
  }

  @Get(`/get_by_authorId/:authorId`)
  getByAuthorId(@Param('authorId') authorId: number) {
    return this.trackService.getTracksByAuthor(authorId);
  }

  @Get(`/get_chart`)
  getChart() {
    return this.trackService.getChart();
  }

  @Post(`/listen/:trackId`)
  listen(@Param('trackId') trackId: number) {
    return this.trackService.listen(trackId);
  }

  @Delete(`/delete/:trackId`)
  delete(@Param(`trackId`) trackId: number) {
    return this.trackService.delete(trackId);
  }
}
