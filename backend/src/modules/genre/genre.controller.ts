import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GenreService } from './genre.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Genres')
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) { }

  @ApiOperation({ summary: 'Получение массива всех жанров' })
  @Get(`/get_all`)
  getAll() {
    return this.genreService.getAll();
  }

  @ApiOperation({ summary: 'Получение одного жанра по названию' })
  @Get(`/get_one/:title`)
  getOne(@Param('title') title: string) {
    return this.genreService.getOne(title);
  }

  @ApiOperation({ summary: 'Создание жанра' })
  @Post(`/create`)
  create(@Body() title: string) {
    return this.genreService.create(title);
  }
}
