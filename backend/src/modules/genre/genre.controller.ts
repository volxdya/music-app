import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GenreService } from './genre.service';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get(`/get_all`)
  getAll() {
    return this.genreService.getAll();
  }

  @Get(`/get_one/:title`)
  getOne(@Param('title') title: string) {
    return this.genreService.getOne(title);
  }

  @Post(`/create`)
  create(@Body() title: string) {
    return this.genreService.create(title);
  }
}
